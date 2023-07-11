import {
  IGetCartOfUserRes,
  apiAddToCart,
  apiGetCartOfUser,
  apiGetOrderDetail,
  apiReduceItem,
  apiRemoveItemInCart,
  routerPathFull,
} from "@core";
import { usePathname, useStorageToken, useStorageTotalCartItems } from "@store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductItemCart from "../../compositions/product-item-cart";
import TotalPriceInCart from "../../compositions/total-price-in-cart";
import LeftRightLayout from "../left-right-layout";

export function DetailCart() {
  const { token } = useStorageToken();
  const navigation = useNavigate();
  const setPathname = usePathname((state: any) => state.setPathname);
  const { pathname } = useLocation();
  const { setTotalCartItems, totalCartItems } = useStorageTotalCartItems();
  const [enableGet, setEnableGet] = useState(true);

  const { data, refetch } = useQuery<IGetCartOfUserRes>({
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryKey: ["getCartItemsInCart", token, pathname],
    queryFn: () => apiGetCartOfUser(),
    onSuccess(data) {
      const sum = data?.laptopDTOs?.reduce(
        (accumulator: any, currentValue: any) => {
          return accumulator + currentValue.quantity;
        },
        0
      );
      setTotalCartItems(sum || 0);
      setEnableGet(false);
      console.log(enableGet);
    },
    onError(err) {
      console.log(err);
      setPathname(pathname);
      navigation(routerPathFull.auth.login);
    },
    enabled: enableGet,
  });

  useEffect(() => {
    refetch();
  }, []);

  const { laptopDTOs, totalPayment } = data || {};

  const { mutate: removeItem, isSuccess: removeSuccess } = useMutation({
    mutationKey: ["removeItemFromCart"],
    mutationFn: apiRemoveItemInCart,
    onSuccess(data, variables, context) {
      setEnableGet(true);
      const sum = data?.laptopDTOs?.reduce(
        (accumulator: any, currentValue: any) => {
          return accumulator + currentValue.quantity;
        },
        0
      );
      setTotalCartItems(sum || 0);
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });

  const { mutate: addProductToCart, isSuccess: addSuccess } = useMutation({
    mutationKey: ["addProductToCart"],
    mutationFn: apiAddToCart,
    onSuccess(data, variables, context) {
      console.log(data);
      setEnableGet(true);
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });

  const { mutate: reduceItem, isSuccess: decreaseSuccess } = useMutation({
    mutationKey: ["apiReduceItem"],
    mutationFn: apiReduceItem,
    onSuccess(data, variables, context) {
      setEnableGet(true);
      const sum = data?.laptopDTOs?.reduce(
        (accumulator: any, currentValue: any) => {
          return accumulator + currentValue.quantity;
        },
        0
      );
      setTotalCartItems(sum || 0);
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });

  const removeItemFromCart = (laptopID: number) => {
    removeItem({ token: token, ids: [laptopID] });
  };

  // useEffect(() => {
  //   refetch();
  // }, [
  //   loadingGetCart,
  //   getCartSuccess,
  //   removeSuccess,
  //   addSuccess,
  //   decreaseSuccess,
  //   data,
  // ]);

  return (
    <LeftRightLayout
      leftChildren={laptopDTOs?.map(
        (
          {
            id,
            linkAvatar,
            price,
            productName,
            quantity,
            cpu,
            ram,
            storage,
            weight,
          },
          index
        ) => {
          return (
            <ProductItemCart
              key={id}
              laptopID={id}
              laptopImage={linkAvatar}
              laptopName={productName}
              laptopPrice={price}
              quantity={quantity}
              laptopSummary={[cpu, ram, storage]}
              removeItemFromCart={() => removeItemFromCart(id)}
              increase={() =>
                addProductToCart({ laptopId: id, quantity: 1, token: token })
              }
              decrease={() => reduceItem({ token: token, ids: [id] })}
            />
          );
        }
      )}
      rightChildren={<TotalPriceInCart totalPrice={totalPayment || 0} />}
    />
  );
}

export default DetailCart;

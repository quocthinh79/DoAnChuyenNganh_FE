import { useEffect, useState } from "react";
// import { productItemCart } from "../../dummy-data/product-item-cart";
import {
  IGetCartOfUserRes,
  IProduct,
  apiGetCartOfUser,
  apiRemoveItemInCart,
  sumValueArray,
} from "@core";
import { useStorageToken } from "@store";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface useHandleCartItems {
  listItemsCart: IProduct[];
  totalPrice: number;
  totalProduct: number;
  removeItemFromCart: (laptopID: number) => void;
}

export const useHandleCartItems = (): useHandleCartItems => {
  const [listItemsCart, setListItemsCart] = useState<IProduct[]>([]);

  // TODO: Call API Cart
  // console.log("Call API");
  const { data } = useQuery<IGetCartOfUserRes>({
    refetchOnWindowFocus: false,
    queryKey: ["getCartItems"],
    queryFn: () => apiGetCartOfUser({ token }),
  });

  const { laptopDTOs, totalPayment } = data || {};

  const totalPriceOfCart: number = sumValueArray(
    listItemsCart?.map(({ price }) => price)
  );

  const { token } = useStorageToken();

  const { mutate: removeItem, data: dataAfterRemove } = useMutation({
    mutationKey: ["removeItemFromCart"],
    mutationFn: apiRemoveItemInCart,
    onSuccess(data, variables, context) {
      console.log(data);
    },
    onError(error, variables, context) {
      console.log(error);
    },
  });

  const removeItemFromCart = (laptopID: number) => {
    setListItemsCart(listItemsCart?.filter(({ id }) => id != laptopID));
    removeItem({ token: token, ids: [laptopID] });
    console.log("Call API Delete");
  };

  useEffect(() => {
    setListItemsCart(laptopDTOs || []);
  }, [listItemsCart, dataAfterRemove]);

  return {
    totalProduct: listItemsCart?.length,
    totalPrice: totalPayment || totalPriceOfCart,
    listItemsCart,
    removeItemFromCart,
  };
};

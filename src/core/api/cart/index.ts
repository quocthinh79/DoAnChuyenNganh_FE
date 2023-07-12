import { IAddToCart, IGetCartOfUserReq, IRemoveItemCartReq } from "@core";
import instanceAxios from "../instance-axios";

export const apiAddToCart = ({ laptopId, quantity }: IAddToCart) => {
  return instanceAxios
    .post(
      "/cart/laptop/add",
      {},
      {
        params: {
          laptopId,
          quantity,
        },
      }
    )
    .then((res) => res.data);
};

export const apiGetCartOfUser = () => {
  return instanceAxios.get("/cart/laptops").then((res) => res.data);
};

export const apiRemoveItemInCart = ({ ids }: IRemoveItemCartReq) => {
  return instanceAxios
    .delete("/cart/laptop/remove", {
      data: {
        ids,
      },
    })
    .then((res) => res.data);
};

export const apiReduceItem = ({ ids }: IRemoveItemCartReq) => {
  return instanceAxios
    .put("/cart/laptop/reduce", {
      ids,
    })
    .then((res) => res.data);
};

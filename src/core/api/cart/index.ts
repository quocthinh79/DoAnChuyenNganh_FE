import { IAddToCart, IGetCartOfUserReq, IRemoveItemCartReq } from "@core";
import instanceAxios from "../instance-axios";

export const apiAddToCart = ({ laptopId, quantity, token }: IAddToCart) => {
  return instanceAxios
    .post(
      "/cart/laptop/add",
      {},
      {
        params: {
          laptopId,
          quantity,
          token,
        },
      }
    )
    .then((res) => res.data);
};

export const apiGetCartOfUser = ({ token }: IGetCartOfUserReq) => {
  return instanceAxios
    .get("/cart/laptops", {
      params: {
        token,
      },
    })
    .then((res) => res.data);
};

export const apiRemoveItemInCart = ({ token, ids }: IRemoveItemCartReq) => {
  return instanceAxios
    .delete("/cart/laptop/remove", {
      data: {
        token,
        ids,
      },
    })
    .then((res) => res.data);
};

export const apiReduceItem = ({ token, ids }: IRemoveItemCartReq) => {
  return instanceAxios
    .put("/cart/laptop/reduce", {
      token,
      ids,
    })
    .then((res) => res.data);
};

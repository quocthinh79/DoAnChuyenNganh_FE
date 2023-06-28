import { IAddToOrderReq, IOrderDetailReq, IOrderListReq } from "@core";
import instanceAxios from "../instance-axios";

export const apiAddToOrder = ({ token }: IAddToOrderReq) => {
  return instanceAxios
    .post(
      "/order",
      {},
      {
        params: {
          token,
        },
      }
    )
    .then((res) => res.data);
};

export const apiGetOrderList = ({ token }: IOrderListReq) => {
  return instanceAxios
    .get("/order/list", {
      params: {
        token,
      },
    })
    .then((res) => res.data);
};

export const apiGetOrderDetail = ({ token, orderId }: IOrderDetailReq) => {
  return instanceAxios
    .get("/order/detail", {
      params: {
        token,
        orderId,
      },
    })
    .then((res) => res.data);
};

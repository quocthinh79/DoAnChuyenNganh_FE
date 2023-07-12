import { IAddToOrderReq, IOrderDetailReq, IOrderListReq } from "@core";
import instanceAxios from "../instance-axios";

export const apiAddToOrder = () => {
  return instanceAxios.post("/order").then((res) => res.data);
};

export const apiGetOrderList = () => {
  return instanceAxios.get("/order/list").then((res) => res.data);
};

export const apiGetOrderDetail = ({ orderId }: IOrderDetailReq) => {
  return instanceAxios
    .get("/order/detail", {
      params: {
        orderId,
      },
    })
    .then((res) => res.data);
};

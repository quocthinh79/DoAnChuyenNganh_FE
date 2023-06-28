import { IProduct } from "../response";

export interface IOrderListRes {
  addressDetail: string;
  id: string | number;
  orderDate: any;
  status: string;
  totalPayment: number;
  laptopDTOS: IProduct[];
}

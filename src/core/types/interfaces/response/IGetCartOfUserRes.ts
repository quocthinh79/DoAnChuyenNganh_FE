import { IProduct } from "./ILaptop";

export interface IGetCartOfUserRes {
  totalPayment: number;
  laptopDTOs: IProduct[];
}

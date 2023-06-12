import { IProduct } from "./ILaptop";

export interface ILaptopPagination {
  page: number;
  totalPage: number;
  laptopList: IProduct[];
}

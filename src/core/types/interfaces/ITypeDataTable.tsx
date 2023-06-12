// export interface ITypeDataTable<T> {
//   key: number;
//   [propName: string]: T;
// }

export interface ITypeDataTable {
  key?: number;
  [propName: string]: any;
}

export default ITypeDataTable;

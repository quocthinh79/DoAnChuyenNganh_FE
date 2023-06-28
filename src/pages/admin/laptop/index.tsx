import { TableLaptop } from "@compositions";
import { ITypeDataTable, apiGetMultipleLaptop } from "@core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface LaptopAdminProps {}

export function LaptopAdmin(props: LaptopAdminProps) {
  // const [dataModal, setDataModal] = useState<ITypeDataTable[]>([]);

  // const { data, dataUpdatedAt, refetch } = useQuery({
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  //   queryKey: ["apiGetLaptop"],
  //   queryFn: () => apiGetMultipleLaptop({ start: 1, limit: 10 }),
  //   onSuccess: (data) => {
  //     // setDataModal(data?.laptopList);
  //   },
  //   onError: (error: any) => {
  //     console.log(error);
  //   },
  // });

  // useEffect(() => {
  //   console.log("🚀 ~ file: index.tsx:21 ~ LaptopAdmin ~ data:", data);
  // }, [data]);

  return <TableLaptop />;
}

export default LaptopAdmin;

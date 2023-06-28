import { Space } from "@components";
import { EDirectionType, IOrderListRes, apiGetOrderList } from "@core";
import { useStorageToken } from "@store";
import { useQuery } from "@tanstack/react-query";
import ProductItemOrder from "../product-item-order";

export interface ListOrderProps {}

export function ListOrder(props: ListOrderProps) {
  const { token } = useStorageToken();
  const { data: listOrder } = useQuery<IOrderListRes[]>({
    queryKey: ["listOrder"],
    queryFn: () => apiGetOrderList({ token }),
  });
  console.log("🚀 ~ file: index.tsx:13 ~ ListOrder ~ listOrder:", listOrder);

  return (
    <Space widthFull direction={EDirectionType.Vertical}>
      {listOrder?.map(
        (
          { addressDetail, id, laptopDTOS, orderDate, status, totalPayment },
          index
        ) => {
          return (
            <ProductItemOrder
              key={id}
              orderID={id}
              laptopName={laptopDTOS[0]?.productName}
              quantity={laptopDTOS?.length}
              status={status}
              totalPayment={totalPayment}
            />
          );
        }
      )}
    </Space>
  );
}

export default ListOrder;

import { useParams } from "react-router-dom";
import {
  Card,
  Col,
  Description,
  DescriptionItem,
  Flex,
  Image,
  Row,
  Space,
  Text,
  Title,
} from "@components";
import {
  EDirectionFlex,
  EDirectionType,
  EFlexAlign,
  EJustifyFlex,
  IOrderListRes,
  apiGetOrderDetail,
  arrayToString,
  formatCurrency,
} from "@core";
import { useTheme } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";
import { useStorageToken } from "@store";
import ProductItemInCheckout from "../product-item-in-checkout";
import LeftRightLayout from "../left-right-layout";

export interface OrderDetailProps {}

export function OrderDetail({}: OrderDetailProps) {
  let { idOrder } = useParams();
  const { token } = useStorageToken();
  const { colorPrice } = useTheme();

  const { data: orderDetail } = useQuery<IOrderListRes>({
    queryKey: ["orderDetail", idOrder],
    queryFn: () => apiGetOrderDetail({ token, orderId: idOrder }),
  });

  const { addressDetail, id, laptopDTOS, orderDate, status, totalPayment } =
    orderDetail || {};

  return (
    <LeftRightLayout
      leftChildren={laptopDTOS?.map(
        (
          {
            id,
            linkAvatar,
            price,
            productName,
            quantity,
            cpu,
            ram,
            storage,
            weight,
          },
          index
        ) => {
          return (
            <ProductItemInCheckout
              key={id}
              laptopID={id}
              laptopImage={linkAvatar}
              laptopName={productName}
              totalPriceOfItem={price * quantity}
              quantity={quantity}
              laptopSummary={[cpu, ram, storage]}
            />
          );
        }
      )}
      rightChildren={
        <Card>
          <Space widthFull direction={EDirectionType.Vertical}>
            <Description title="Thông tin hóa đơn" column={1}>
              <DescriptionItem label="Trạng thái">
                <Text>{status}</Text>
              </DescriptionItem>
              <DescriptionItem label="Địa chỉ giao hàng">
                <Text>{addressDetail}</Text>
              </DescriptionItem>
              <DescriptionItem label="Tổng giá trị đơn hàng">
                <Text textColor={colorPrice} strong>
                  {formatCurrency(totalPayment || 0)}
                </Text>
              </DescriptionItem>
            </Description>
          </Space>
        </Card>
      }
    />
  );
}

export default OrderDetail;

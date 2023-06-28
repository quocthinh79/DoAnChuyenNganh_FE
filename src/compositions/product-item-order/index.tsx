import { Button, Card, Divider, Flex, Text, Title } from "@components";
import {
  EDirectionFlex,
  EJustifyFlex,
  ETextAlign,
  formatCurrency,
} from "@core";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export interface ProductItemOrderProps {
  orderID: number | string;
  laptopName: string;
  quantity: number;
  totalPayment: number;
  status: string;
}

function ProductItemOrder({
  orderID,
  laptopName = "This is Laptop Name",
  quantity,
  totalPayment,
  status,
}: ProductItemOrderProps) {
  const { colorPrice } = useTheme();

  const navigator = useNavigate();

  return (
    <Card>
      <Flex direction={EDirectionFlex.Column} gap={5}>
        <Text textAlign={ETextAlign.End}>{status}</Text>
        <Title ellipsis={{ rows: 2 }} level={4}>
          {laptopName}
        </Title>
        <Text>Tổng số lượng sản phẩm: {quantity}</Text>
      </Flex>
      <Divider />
      <Flex justify={EJustifyFlex.SpaceBetween}>
        <Text textColor={colorPrice} strong>
          {formatCurrency(totalPayment)}
        </Text>
        <Button onClick={() => navigator(`/order-detail/${orderID}`)}>
          Chi tiết
        </Button>
      </Flex>
    </Card>
  );
}

export default ProductItemOrder;

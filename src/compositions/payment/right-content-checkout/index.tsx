import { Button, Card, Divider, Flex, Space, Text } from "@components";
import { EButtonTypes, EJustifyFlex, formatCurrency } from "@core";
import { useTheme } from "@emotion/react";
import { useHandleCartItems } from "@hooks";

export interface RightContentCheckoutProps {
  form: any;
}

export function RightContentCheckout({ form }: RightContentCheckoutProps) {
  const { totalPrice } = useHandleCartItems();
  const { colorPrice } = useTheme();

  return (
    <Card>
      <Space widthFull>
        <Text strong>Tóm tắt đơn hàng</Text>
        <Divider />
        <Flex justify={EJustifyFlex.SpaceBetween}>
          <Text>Tổng cộng</Text>
          <Text textColor={colorPrice} strong>
            {formatCurrency(totalPrice)}
          </Text>
        </Flex>
        <Button onClick={() => form.submit()} block type={EButtonTypes.Primary}>
          Thanh toán
        </Button>
      </Space>
    </Card>
  );
}

export default RightContentCheckout;

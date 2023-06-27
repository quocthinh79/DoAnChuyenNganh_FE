import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  Col,
  Flex,
  Image,
  InputNumber,
  Row,
  SizeProps,
  Space,
  SpaceCompact,
  Text,
  Title,
} from "@components";
import {
  EButtonTypes,
  EDirectionFlex,
  EDirectionType,
  EFlexAlign,
  EJustifyFlex,
  apiAddToCart,
  formatCurrency,
} from "@core";
import { arrayToString } from "../../core/utilities/array";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useStorageToken } from "@store";

export interface ProductItemCartProps {
  laptopID: number;
  laptopName: string;
  laptopSummary: string[];
  laptopPrice: number;
  laptopImage: string;
  quantity: number;
  // totalPrice: number;
  removeItemFromCart?: () => void;
  increase?: () => void;
  decrease?: () => void;
}

function ProductItemCart({
  laptopID,
  laptopName = "This is Laptop Name",
  laptopPrice,
  laptopSummary = [],
  laptopImage = "",
  quantity,
  // totalPrice,
  decrease,
  increase,
  removeItemFromCart,
}: ProductItemCartProps) {
  const { colorPrice } = useTheme();
  const _laptopSummary = arrayToString(laptopSummary || []);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(quantity);

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  const { token } = useStorageToken();

  // const increase = () => {
  //   // setValue(Number(inputRef.current?.value) + 1);
  //   addProductToCart({ laptopId: laptopID, quantity: 1, token });
  // };

  // const decrease = () => {
  //   if (Number(inputRef.current?.value) > 1)
  //     setValue(Number(inputRef.current?.value) - 1);
  // };

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Flex justify={EJustifyFlex.Center} align={EFlexAlign.Center}>
            <Image preview={false} src={laptopImage} />
          </Flex>
        </Col>
        <Col span={13} offset={1}>
          <Title level={4}>{laptopName}</Title>
          <Space size={SizeProps.Large} direction={EDirectionType.Vertical}>
            <Text>{_laptopSummary}</Text>
            <Space>
              <SpaceCompact>
                <Button onClick={decrease} icon={<MinusOutlined />}></Button>
                <InputNumber value={value} ref={inputRef} />
                <Button onClick={increase} icon={<PlusOutlined />}></Button>
              </SpaceCompact>
            </Space>
          </Space>
        </Col>
        <Col span={6}>
          <Flex
            justify={EJustifyFlex.SpaceAround}
            direction={EDirectionFlex.Column}
            align={EFlexAlign.Center}
          >
            <Text textColor={colorPrice} strong>
              {formatCurrency(laptopPrice * quantity)}
            </Text>
            <Button
              onClick={removeItemFromCart}
              type={EButtonTypes.Primary}
              block
              danger
            >
              Xóa khỏi giỏ hàng
            </Button>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductItemCart;

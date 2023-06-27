import {
  Card,
  Col,
  Description,
  DescriptionItem,
  Flex,
  Image,
  Row,
  Text,
  Title,
} from "@components";
import {
  EDirectionFlex,
  EFlexAlign,
  EJustifyFlex,
  arrayToString,
  formatCurrency,
} from "@core";
import { useTheme } from "@emotion/react";

export interface ProductItemCheckoutProps {
  laptopID: number;
  laptopName: string;
  laptopSummary: string[];
  totalPriceOfItem: number;
  laptopImage: string;
  quantity: number;
}

export function ProductItemInCheckout({
  laptopID = 0,
  laptopImage = "",
  laptopName = "",
  laptopSummary = [],
  totalPriceOfItem = 0,
  quantity = 0,
}: ProductItemCheckoutProps) {
  const { colorPrice } = useTheme();
  const _laptopSummary = arrayToString(laptopSummary || []);

  return (
    <Card key={laptopID}>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Flex justify={EJustifyFlex.Center} align={EFlexAlign.Center}>
            <Image preview={false} src={laptopImage} />
          </Flex>
        </Col>
        <Col span={13} offset={1}>
          <Title level={4}>{laptopName}</Title>
          <Text>{_laptopSummary}</Text>
          <Description>
            <DescriptionItem label="Số lượng">{quantity}</DescriptionItem>
          </Description>
        </Col>
        <Col span={6}>
          <Flex
            direction={EDirectionFlex.Column}
            justify={EJustifyFlex.Center}
            align={EFlexAlign.Center}
          >
            <Text textColor={colorPrice} strong>
              {formatCurrency(totalPriceOfItem || 0)}
            </Text>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductItemInCheckout;

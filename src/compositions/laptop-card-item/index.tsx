import { Badge, Card, Descriptions, Image } from "antd";
import DescriptionsItem from "antd/es/descriptions/Item";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../core";

export interface LaptopCardItemProps {
  linkAvatar?: string;
  productName?: string;
  price?: number;
  id?: any;
}

export function LaptopCardItem({
  // TODO: Change default props
  id = 2,
  price = 100000000,
  productName = "Lenovo Legion 5 Pro 2022",
  linkAvatar = "",
}: LaptopCardItemProps) {
  return (
    <Link to={`/detail/${id}`}>
      <Badge.Ribbon text="Hot" color="red">
        <Card hoverable bodyStyle={{ height: "410px" }}>
          <Image placeholder={productName} preview={false} src={linkAvatar} />
          <Title ellipsis={{ rows: 2 }} level={4}>
            {productName}
          </Title>
          <Descriptions>
            <DescriptionsItem
              contentStyle={{ color: "red", fontWeight: 700 }}
              label="Giá"
            >
              {formatCurrency(price, "VND")}
            </DescriptionsItem>
          </Descriptions>
        </Card>
      </Badge.Ribbon>
    </Link>
  );
}

export default LaptopCardItem;

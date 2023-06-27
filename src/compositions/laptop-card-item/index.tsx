import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import DescriptionItem from "../../components/description-item";
import Description from "../../components/descriptions";
import Image from "../../components/image";
import { Title } from "../../components/typography";
import { formatCurrency } from "../../core";
import { BadgeRibbon } from "@components";

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
  const { colorPrice } = useTheme();
  return (
    <Link to={`/detail/${id}`}>
      <BadgeRibbon text="Hot" color="red">
        <Card hoverable bodyStyle={{ height: "410px" }}>
          <Image placeholder={productName} preview={false} src={linkAvatar} />
          <Title ellipsis={{ rows: 2 }} level={4}>
            {productName}
          </Title>
          <Description>
            <DescriptionItem
              contentStyle={{ color: colorPrice, fontWeight: 700 }}
              label="Giá"
            >
              {formatCurrency(price, "VND")}
            </DescriptionItem>
          </Description>
        </Card>
      </BadgeRibbon>
    </Link>
  );
}

export default LaptopCardItem;

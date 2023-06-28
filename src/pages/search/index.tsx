import { Card, Col, Row, Space, Text, Title } from "@components";
import { LaptopCardItem } from "@compositions";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import { IProduct, apiSearchLaptopWithName } from "@core";
import { useQuery } from "@tanstack/react-query";
import { Empty } from "antd";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export interface SearchPageProps {}

export function SearchPage(props: SearchPageProps) {
  const [searchParams] = useSearchParams();
  const keyWord = searchParams.get("keyWord");

  const { data: laptopItemList, refetch } = useQuery<IProduct[]>({
    queryKey: ["searchLaptop"],
    queryFn: () => apiSearchLaptopWithName({ productName: keyWord || "" }),
  });

  useEffect(() => {
    refetch();
  }, [keyWord]);

  return (
    <Space>
      <Card bodyStyle={{ width: "100%" }}>
        <Title level={2}>Kết quả tìm kiếm cho "{keyWord}"</Title>
        <Text>Tìm thấy {laptopItemList?.length} sản phẩm</Text>
      </Card>
      <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
        {laptopItemList?.length || 0 > 0 ? (
          laptopItemList?.map(
            ({ price, productName, linkAvatar, id }, index) => (
              <Col key={`${productName}${index}`} span={6}>
                <LaptopCardItem
                  key={index}
                  id={id}
                  price={price}
                  productName={productName}
                  linkAvatar={
                    linkAvatar ||
                    "https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/2375_lenovo_legion_5_pro_16iah7h_ct1_1600.png?w=500&h=500"
                  }
                />
              </Col>
            )
          )
        ) : (
          <Empty style={{ width: "100%", backgroundColor: "white" }} />
        )}
      </Row>
    </Space>
  );
}

export default SearchPage;

import { ILaptopPagination, apiGetMultipleLaptop } from "@core";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IPagination } from "src/core/types/interfaces/IPagination";
import { Pagination } from "../../components";
import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import { SPACE_BETWEEN_ITEMS } from "../../const";
import LaptopCardItem from "../laptop-card-item";

export function ProductItemLayout() {
  // const { allSearchParams } = useSelectedTag();

  const [searchParams, setSearchParams] = useSearchParams();
  const keepRef = useRef({ isReset: false });

  const allSearchParams = Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => [key, value])
  );

  const { brand, cpu, types } = allSearchParams;

  const [dataWithPagination, setDataWithPagination] = useState<IPagination>({
    start: 1,
    limit: 9,
    brands: "",
    chipCpus: "",
    types: "",
  });

  const { data, refetch } = useQuery<ILaptopPagination>({
    refetchOnWindowFocus: false,
    enabled: false,
    queryKey: ["laptopItemList"],
    queryFn: () =>
      apiGetMultipleLaptop({
        ...dataWithPagination,
        brands: brand,
        chipCpus: cpu,
        types: types,
      }),
    onSuccess(data) {
      // console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });

  const { laptopList, page, totalPage } = data || {};

  const handleFilter = useCallback(() => {
    setDataWithPagination((pre) => ({
      ...pre,
      start: 1,
      limit: 9,
    }));
  }, [brand, cpu, types]);

  useEffect(() => {
    if (!keepRef.current.isReset) {
      handleFilter();
      keepRef.current.isReset = false;
    }
  }, [brand, cpu, types]);

  const handleChange = (page: number, pageSize: number) => {
    setDataWithPagination((pre) => ({
      ...pre,
      start: page,
      limit: pageSize,
    }));
  };

  useEffect(() => {
    refetch();
    // handleFilter();
  }, [searchParams, dataWithPagination]);

  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      {laptopList?.map(({ price, productName, linkAvatar, id }, index) => (
        <Col key={`${productName}${index}`} span={8}>
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
      ))}
      <Col span={SPACE_BETWEEN_ITEMS}>
        <Pagination
          current={dataWithPagination?.start}
          defaultCurrent={1}
          pageSize={9}
          total={totalPage! * dataWithPagination?.limit!}
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
}

export default ProductItemLayout;

import styled from "@emotion/styled";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { Sider } from "../../components";
import useSelectedTag from "../../hooks/use-selected-tag/use-selected-tag";
import SiderItem from "./sider-item";
import { useQuery } from "@tanstack/react-query";
import {
  EOrderTags,
  apiBrandFilterItems,
  apiCPUFilterItems,
  apiTypeFilterItems,
} from "@core";

const StyledContainer = styled("div")`
  .ant-layout-sider {
    background-color: inherit;
  }
`;

export function MainSider() {
  const { data: brandFilterItems } = useQuery<string[]>({
    refetchOnWindowFocus: false,
    queryKey: ["BrandFilterItems"],
    queryFn: () => apiBrandFilterItems(),
  });

  const { data: typeFilterItems } = useQuery<string[]>({
    refetchOnWindowFocus: false,
    queryKey: ["TypeFilterItems"],
    queryFn: () => apiTypeFilterItems(),
  });
  // console.log(typeFilterItems);

  const { data: cpuFilterItems } = useQuery<string[]>({
    refetchOnWindowFocus: false,
    queryKey: ["CPUFilterItems"],
    queryFn: () => apiCPUFilterItems(),
  });

  const demandData: string[] = [
    "Văn phòng, học tập",
    "2D Design",
    "Quay dựng Video",
    "3D Design",
    "Gaming",
    "Lập trình",
  ];

  const brandData: string[] = [
    "Apple",
    "Dell",
    "HP",
    "Lenovo",
    "Razer",
    "Microsoft",
    "MSI",
    "Asus",
    "Acer",
    "LG",
    "AVITA",
    "GIGABYTE",
    "Samsung",
    "HUAWEI",
    "Colorful",
    "Xiaomi",
  ];

  const productSource: string[] = ["Chính hãng", "Nhập khẩu"];

  const cpu: string[] = [
    "Core i3",
    "Core i5",
    "Core i7",
    "Core i9",
    "Xeon",
    "Ryzen 3",
    "Ryzen 5",
    "Ryzen 7",
    "Ryzen 9",
    "MediaTek",
    "AMD",
    "Celeron",
    "Pentium",
    "Android",
    "M1",
    "M2",
  ];

  const { handleChange, selectedTags } = useSelectedTag();

  // console.log(allSearchParams);

  return (
    <StyledContainer>
      <Sider width={300}>
        <Collapse defaultActiveKey={["1", "2", "3"]}>
          <CollapsePanel header="Loại Laptop" key="1">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.Types}
              children={typeFilterItems}
            />
          </CollapsePanel>
          <CollapsePanel header="Thương hiệu" key="2">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.Brand}
              children={brandFilterItems}
            />
          </CollapsePanel>
          <CollapsePanel header="CPU" key="3">
            <SiderItem
              selectedTags={selectedTags}
              handleChange={handleChange}
              label={EOrderTags.CPU}
              children={cpuFilterItems}
            />
          </CollapsePanel>
        </Collapse>
      </Sider>
    </StyledContainer>
  );
}

export default MainSider;

import {
  FormItem,
  InputText,
  OptionsSelect,
  Select,
  SizeProps,
  Space,
} from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import { EDirectionType, convertArrayToOptionsSelect } from "@core";
import { useSelectProvinces } from "@hooks";
import { memo } from "react";

export function AddressInformationFormItem() {
  const {
    setCitySelected,
    setDistrictsSelected,
    setWardSelected,
    cityList,
    districtsList,
    wardsList,
  } = useSelectProvinces();

  return (
    <Space
      size={SizeProps.Middle}
      direction={EDirectionType.Vertical}
      widthFull
    >
      <FormItem
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="city"
        label="Tỉnh/Thành phố"
      >
        <Select
          placeholder="Chọn Tỉnh/Thành phố"
          options={convertArrayToOptionsSelect(cityList)}
          onChange={(value: string) => setCitySelected(value)}
        />
      </FormItem>
      <FormItem
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="district"
        label="Quận/Huyện"
      >
        <Select
          placeholder="Chọn Quận/Huyện"
          options={convertArrayToOptionsSelect(districtsList)}
          onChange={(value: string) => setDistrictsSelected(value)}
        />
      </FormItem>
      <FormItem
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="ward"
        label="Phường/Xã"
      >
        <Select
          placeholder="Chọn Phường/Xã"
          options={convertArrayToOptionsSelect(wardsList)}
          onChange={(value: string) => setWardSelected(value)}
        />
      </FormItem>
    </Space>
  );
}

export default memo(AddressInformationFormItem);

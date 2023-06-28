import City from "./city";
import Districts from "./districts";
import Wards from "./wards";
import { Breadcrumb, Input } from "antd";
import { Button, Divider, FormItem, Modal } from "@components";
import { EButtonTypes, EModalWidth, EProvinces } from "@core";
import { useDisclosure, useSelectProvinces } from "@hooks";
import { useEffect } from "react";

export interface SelectProvincesFormItemProps {
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectProvincesFormItem({
  setValueInput,
}: SelectProvincesFormItemProps) {
  const { open, onClose, onOpen } = useDisclosure({
    initialState: false,
  });

  const {
    dataRender,
    setCitySelected,
    setDistrictsSelected,
    setWardSelected,
    setDataRender,
    cityList,
    districtsList,
    wardsList,
    resultAddress,
  } = useSelectProvinces();

  const onChangeSelect = (values: any) => {
    // data?.find((province) => )
  };

  useEffect(() => {
    setValueInput(resultAddress);
  }, [resultAddress]);

  return (
    <>
      <FormItem
        name="address"
        rules={[
          {
            required: true,
            message: "Không được bỏ trống",
          },
        ]}
        label="Chọn khu vực"
      >
        <Input onClick={() => onOpen()} />
      </FormItem>
      <Modal
        open={open}
        onOk={onClose}
        onCancel={onClose}
        width={EModalWidth.ExtraSmall}
        footer={null}
      >
        <Breadcrumb
          items={[
            {
              title: (
                <Button
                  type={EButtonTypes.Text}
                  onClick={() =>
                    setDataRender({
                      typeSelect: EProvinces.City,
                      dataRender: cityList,
                    })
                  }
                >
                  Tỉnh
                </Button>
              ),
            },
            {
              title: (
                <Button
                  type={EButtonTypes.Text}
                  onClick={() =>
                    setDataRender({
                      typeSelect: EProvinces.District,
                      dataRender: districtsList,
                    })
                  }
                >
                  Huyện
                </Button>
              ),
            },
            {
              title: (
                <Button
                  type={EButtonTypes.Text}
                  onClick={() =>
                    setDataRender({
                      typeSelect: EProvinces.Ward,
                      dataRender: wardsList,
                    })
                  }
                >
                  Xã
                </Button>
              ),
            },
          ]}
        />
        <Divider />
        {dataRender.typeSelect === EProvinces.City && (
          <City
            cityList={dataRender.dataRender}
            setCitySelected={setCitySelected}
          />
        )}
        {dataRender.typeSelect === EProvinces.District && (
          <Districts
            districtsList={dataRender.dataRender}
            setDistrictSelected={setDistrictsSelected}
          />
        )}
        {dataRender.typeSelect === EProvinces.Ward && (
          <Wards
            onCloseModal={onClose}
            wardsList={dataRender.dataRender}
            setWardSelected={setWardSelected}
          />
        )}
      </Modal>
    </>
  );
}

export default SelectProvincesFormItem;

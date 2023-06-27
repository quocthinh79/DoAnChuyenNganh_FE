import { Button, Card, Form, SizeProps, Space, Title } from "@components";
import {
  EButtonTypes,
  EDirectionType,
  EHtmlButtonTypes,
  IGetOnlyAccountRes,
  apiGetOnlyAccount,
  apiUpdateAccount,
} from "@core";
import { useForm } from "antd/es/form/Form";
import AddressInformationFormItem from "./address-information-form-item";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useStorageToken } from "@store";
import { notification } from "antd";

export function AccountRightContent() {
  const [api, contextHolder] = notification.useNotification();
  const { token } = useStorageToken();
  const [form] = useForm();
  const onFinish = ({ city, district, ward }: any) => {
    updateAccount({ token, address: `${ward}, ${district}, ${city}` });
  };

  const { data, isSuccess: isGetAccountSuccess } = useQuery<IGetOnlyAccountRes>(
    {
      refetchOnWindowFocus: false,
      queryKey: ["account"],
      queryFn: () => apiGetOnlyAccount({ token }),
      onSuccess({ address }) {
        const [ward, district, city] = address?.split(", ") || [];

        form.setFieldsValue({
          city,
          district,
          ward,
        });
      },
    }
  );

  const { mutate: updateAccount } = useMutation({
    mutationKey: ["account"],
    mutationFn: apiUpdateAccount,
    onSuccess: ({ address }) => {
      const [ward, district, city] = address?.split(", ") || [];
      console.log(address);

      form.setFieldsValue({
        city,
        district,
        ward,
      });
      api["success"]({
        message: "Thành Công",
        description: "Đã cập nhật thành công",
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Card>
        <Title level={2}>Địa chỉ mặc định</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Space
            size={SizeProps.Large}
            direction={EDirectionType.Vertical}
            widthFull
          >
            <AddressInformationFormItem />
            <Button
              block
              htmlType={EHtmlButtonTypes.Submit}
              type={EButtonTypes.Primary}
            >
              Cập nhật
            </Button>
          </Space>
        </Form>
      </Card>
    </>
  );
}

export default AccountRightContent;

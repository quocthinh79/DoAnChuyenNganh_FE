import { Button, Card, Form, SizeProps, Space, Title } from "@components";
import {
  EButtonTypes,
  EDirectionType,
  EHtmlButtonTypes,
  IGetOnlyAccountRes,
  IUpdateAccountReq,
  apiGetOnlyAccount,
  apiUpdateAccount,
  dayjs,
  handleSchemaError,
} from "@core";
import { useStorageToken } from "@store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import PersonalInformationFormItem from "./personal-information-form-item";
import { notification } from "antd";

export function AccountLeftContent() {
  const [api, contextHolder] = notification.useNotification();
  const { token } = useStorageToken();
  const [form] = useForm();
  const onFinish = ({
    fullName,
    email,
    phone,
    sex,
    dob,
  }: IUpdateAccountReq) => {
    const passProps = { fullName, email, phone, sex };
    try {
      // TODO: Fix schema validation
      // schemaInformationAccount.parse(values);
      updateAccount({ ...passProps, token, dob: dayjs(dob).toDate() });
    } catch (error) {
      handleSchemaError(error, form);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const { data, isSuccess: isGetAccountSuccess } = useQuery<IGetOnlyAccountRes>(
    {
      refetchOnWindowFocus: false,
      queryKey: ["account"],
      queryFn: () => apiGetOnlyAccount({ token }),
      onSuccess({ fullName, email, phone, sex, dob }) {
        form.setFieldsValue({
          fullName,
          email,
          phone,
          sex,
          dob: dayjs(dob),
        });
      },
    }
  );

  const { mutate: updateAccount } = useMutation({
    mutationKey: ["account"],
    mutationFn: apiUpdateAccount,
    onSuccess: ({ fullName, email, phone, sex, dob }) => {
      form.setFieldsValue({
        fullName,
        email,
        phone,
        sex,
        dob: dayjs(dob),
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

  return (
    <>
      {contextHolder}
      <Card>
        <Title level={2}>Thông tin tài khoản</Title>
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
            <Space
              size={SizeProps.Small}
              direction={EDirectionType.Vertical}
              widthFull
            >
              <PersonalInformationFormItem />
            </Space>
            <Button
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

export default AccountLeftContent;

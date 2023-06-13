import { Button, Card, Flex, Form, SizeProps, Space, Tabs } from "@components";
import {
  EButtonTypes,
  EHtmlButtonTypes,
  EJustifyFlex,
  apiForgotPassword,
  handleSchemaError,
  messError,
  routerPathFull,
  schemaForgotPassword,
} from "@core";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordFormItem from "./forgot-password-form-item";
import { useMessageStorage } from "@store";
import { shallow } from "zustand/shallow";
import { notification } from "antd";
import { ORIGIN_URL } from "@constant";

export interface ForgotPasswordFormItemProps {
  username: string;
}

function ForgotPasswordPage() {
  const [form] = useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { setMessage } = useMessageStorage(
    (state: any) => ({ setMessage: state.setMessage }),
    shallow
  );

  const { mutate: forgotPassword, isLoading } = useMutation({
    mutationKey: ["apiForgotPassword"],
    mutationFn: apiForgotPassword,
    onSuccess: (data) => {
      setMessage(data?.messenger || "Đã thành công");
      navigate(routerPathFull.auth.success);
    },
    onError: (error: any) => {
      api["error"]({
        message: "LỖI",
        description: messError(error),
      });
    },
  });

  const onFinish = async ({ username }: ForgotPasswordFormItemProps) => {
    try {
      schemaForgotPassword.parse({ username });
      forgotPassword({
        username,
        host: `${ORIGIN_URL}${routerPathFull.auth.newPassword}`,
      });
    } catch (error) {
      handleSchemaError(error, form);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Card>
        <Tabs
          items={[
            {
              key: "2",
              label: "Quên mật khẩu",
              children: (
                <Form
                  form={form}
                  name="forgot-password"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Space widthFull size={SizeProps.Large}>
                    <ForgotPasswordFormItem />
                    <Flex justify={EJustifyFlex.FlexEnd}>
                      <Link to={routerPathFull.auth.login}>
                        Quay trở lại đăng nhập
                      </Link>
                    </Flex>
                    <Button
                      loading={isLoading}
                      block
                      type={EButtonTypes.Primary}
                      htmlType={EHtmlButtonTypes.Submit}
                    >
                      Tìm tài khoản
                    </Button>
                  </Space>
                </Form>
              ),
            },
          ]}
        />
      </Card>
    </>
  );
}

export default ForgotPasswordPage;

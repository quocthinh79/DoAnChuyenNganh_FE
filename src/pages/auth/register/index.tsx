import {
  Button,
  Card,
  Flex,
  Form,
  SizeProps,
  Space,
  Tabs,
  Text,
} from "@components";
import {
  EButtonTypes,
  EContentTypeTypography,
  EHtmlButtonTypes,
  EJustifyFlex,
  ETextAlign,
  apiRegister,
  handleSchemaError,
  routerPathFull,
  schemaRegister,
} from "@core";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterFormItem from "./register-form-item";
import { useMutation } from "@tanstack/react-query";

export interface RegisterFormItemProps {
  email: string;
  username: string;
  password: string;
  rePassword: string;
}

function RegisterPage() {
  const [nonDuplicate, setNonDuplicate] = useState(true);
  const [error, setError] = useState(false);
  const [form] = useForm();
  const navigator = useNavigate();

  const { mutate: register, isLoading } = useMutation({
    mutationKey: ["apiLogin"],
    mutationFn: apiRegister,
    onSuccess: (data) => {
      navigator(routerPathFull.auth.login);
    },
    onError: (error: any) => {
      console.log(error);
      setError(true);
    },
  });

  const onFinish = ({
    email,
    password,
    rePassword,
    username,
  }: RegisterFormItemProps) => {
    const passProps = { username, password, rePassword, email };

    try {
      if (rePassword !== password) setNonDuplicate(false);
      schemaRegister.parse({ ...passProps });
      setNonDuplicate(true);
      if (rePassword === password) register({ username, password, email });
    } catch (error) {
      handleSchemaError(error, form);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    handleSchemaError(errorInfo, form);
  };

  return (
    <Card>
      <Tabs
        items={[
          {
            key: "3",
            label: "Đăng kí",
            children: (
              <Form
                form={form}
                name="register"
                labelCol={{ span: 6 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Space widthFull size={SizeProps.Large}>
                  <RegisterFormItem />
                  {!nonDuplicate && (
                    <Text
                      textAlign={ETextAlign.Center}
                      type={EContentTypeTypography.Danger}
                    >
                      Mật khẩu đã nhập không trùng khớp
                    </Text>
                  )}
                  {error && (
                    <Text
                      textAlign={ETextAlign.Center}
                      type={EContentTypeTypography.Danger}
                    >
                      Thông tin không hợp lệ, email hoặc tên người dùng đã được
                      sử dụng
                    </Text>
                  )}
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
                    Đăng kí
                  </Button>
                </Space>
              </Form>
            ),
          },
        ]}
      />
    </Card>
  );
}

export default RegisterPage;

import {
  Button,
  Card,
  Flex,
  Form,
  RememberMe,
  SizeProps,
  Space,
  Tabs,
} from "@components";
import {
  EButtonTypes,
  EHtmlButtonTypes,
  EJustifyFlex,
  ILogin,
  apiLogin,
  apiLoginFacebook,
  apiLoginGoogle,
  handleSchemaError,
  messError,
  routerPathFull,
  schemaLogin,
} from "@core";
import { usePathname, useStorageRoles, useStorageToken } from "@store";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import { memo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormItem from "./login-form-item";
import LoginGoogleButton from "./google-login-button/login-google-button";
import { notification } from "antd";
import axios from "axios";
import { gapi } from "gapi-script"
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import FacebookButton from './facebook-login-button/login-facebook-button';
import { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';
export interface LoginProps { }

export interface LoginFormProps extends ILogin {
  rememberMe: boolean;
}

export function LoginPage(_props: LoginProps) {
  const navigation = useNavigate();
  const [form] = useForm();
  const { setToken } = useStorageToken();
  const { setRoles } = useStorageRoles();
  const [api, contextHolder] = notification.useNotification();
  const pathname = usePathname((state: any) => state.pathname);

  const { mutate: login, isLoading } = useMutation({
    mutationKey: ["apiLogin"],
    mutationFn: apiLogin,
    onSuccess: (data) => {
      pathname === "" ? navigation("/") : navigation(pathname);
      setToken(data.token);
      setRoles(data.roles);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    },
    onError: (error: any) => {
      api["error"]({
        message: "LỖI",
        description: messError(error),
      });
    },
  });

  const onFinish = async ({ password, username }: LoginFormProps) => {
    try {
      schemaLogin.parse({ username, password });
      login({ username, password });
    } catch (error: any) {
      handleSchemaError(error, form);
    }
  };

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId:
          "http://localhost:3000",
        plugin_name: "login google",
      });
    });
  }, [])
  const { mutate: loginGoogle } = useMutation({
    mutationKey: ["apiLoginGoogle"],
    mutationFn: apiLoginGoogle,
    onSuccess: (data) => {
      pathname === "" ? navigation("/") : navigation(pathname);
      setToken(data.token);
      setRoles(data.roles);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    },
    onError: (error: any) => {
      api["error"]({
        message: "LỖI",
        description: messError(error),

      });
    },
  });

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
    console.log(response)
    if ('tokenId' in response) {
      const { tokenId } = response;
      loginGoogle({ tokenId });
    }
  };

  const { mutate: loginFacebook } = useMutation({
    mutationKey: ["apiLoginGoogle"],
    mutationFn: apiLoginFacebook,
    onSuccess: (data) => {
      pathname === "" ? navigation("/") : navigation(pathname);
      console.log(data.token);
      setToken(data.token);
      setRoles(data.roles);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    },
    onError: (error: any) => {
      api["error"]({
        message: "LỖI",
        description: messError(error),

      });
    },
  });

  const responseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    if ('name' in response) {
      if (response.email && response.name) {
        const email = response.email;
        const fullName = response.name;
        loginFacebook({ fullName, email });
      }
    }
  };


  return (
    <>
      {contextHolder}
      <Card>
        <Tabs
          items={[
            {
              key: "1",
              label: "Đăng nhập",
              children: (
                <Form
                  labelCol={{ span: 5 }}
                  form={form}
                  name="login"
                  onFinish={onFinish}
                >
                  <Space widthFull size={SizeProps.Large}>
                    <LoginFormItem />
                    <Flex justify={EJustifyFlex.SpaceBetween}>
                      <RememberMe />
                      <Link to={routerPathFull.auth.forgotPass}>
                        Quên mật khẩu
                      </Link>
                    </Flex>
                    <Button
                      loading={isLoading}
                      block
                      type={EButtonTypes.Primary}
                      htmlType={EHtmlButtonTypes.Submit}
                    >
                      Đăng nhập
                    </Button>
                    <LoginGoogleButton onClick={responseGoogle} />
                    <FacebookButton onFacebookResponse={responseFacebook} />
                    <Flex justify={EJustifyFlex.Center}>
                      <Link to={routerPathFull.auth.register}>
                        Đăng kí tài khoản
                      </Link>
                    </Flex>
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

export default memo(LoginPage);

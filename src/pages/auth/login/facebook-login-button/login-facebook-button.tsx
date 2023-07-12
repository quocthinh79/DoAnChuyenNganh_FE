import FacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from "react-facebook-login";
import { FacebookOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { templateStringToClassName } from "@core";

const FacebookButton = ({
  onFacebookResponse,
}: {
  onFacebookResponse: (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => void;
}) => {
  const responseFacebook = (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    onFacebookResponse(response);
  };

  return (
    <FacebookLogin
      cssClass={templateStringToClassName()`
      background-color: #0675e8;
      color: white !important;
      display: inline-flex;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
      padding: 14px;
      border-radius: 2px;
      border: 1px solid transparent;
      font-size: 14px;
      font-weight: 500;
      font-family: Roboto, sans-serif;
      cursor: pointer;
      `}
      appId="1217081152339317"
      autoLoad={false}
      fields="name,email,picture"
      textButton="Login with Facebook"
      icon={<FacebookOutlined />}
      callback={responseFacebook}
    />
  );
};

export default FacebookButton;

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
        border-radius: 10px;
        background-color: #fff;
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

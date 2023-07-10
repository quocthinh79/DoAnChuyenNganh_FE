import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';
import { FacebookOutlined } from '@ant-design/icons';

const FacebookButton = ({ onFacebookResponse }: { onFacebookResponse: (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => void }) => {
  const responseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    onFacebookResponse(response);
  };

  return (
    <FacebookLogin
      appId="1217081152339317"
      autoLoad={false}
      fields="name,email,picture"
      textButton='Login with Facebook'
      icon={<FacebookOutlined />}
      callback={responseFacebook}
    />
  );
};

export default FacebookButton;


import { memo, useEffect } from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';


interface LoginGoogleButtonProps {
  onClick: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
}
export function LoginGoogleButton(props: LoginGoogleButtonProps) {
  const { onClick } = props;
   
  return (

    <GoogleLogin
      clientId="494988739801-r1truut9bhoi0e03menjkad15vnhjuuh.apps.googleusercontent.com" 
      buttonText="Login with Google"
      onSuccess={onClick}
      onFailure={onClick}
      cookiePolicy={'single_host_origin'}
    />
   
  );
}

export default memo(LoginGoogleButton);

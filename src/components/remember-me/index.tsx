import { useStorageRememberMe } from "@store";
import CheckBox from "../check-box";
import { memo } from "react";

export function RememberMe() {
  const { rememberMe, setRememberMe } = useStorageRememberMe();

  return (
    <CheckBox onChange={() => setRememberMe(!rememberMe)} value={rememberMe}>
      Remember me
    </CheckBox>
  );
}

export default memo(RememberMe);

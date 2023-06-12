import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as InputPasswordCustom } from "./input-password";

export interface InputPasswordProps {
  iconRender?: (visible: any) => ReactNode;
  visibilityToggle?: boolean;
  value?: string;
  name?: string;
  onChange?: () => undefined;
  placeholder?: string;
  prefix?: ReactNode;
  maxLength?: number;
}

const StyledInputPassword = styled(InputPasswordCustom)``;

export function InputPassword({
  iconRender,
  visibilityToggle,
  value,
  maxLength,
  name,
  onChange,
  placeholder,
  prefix,
}: InputPasswordProps) {
  const passProps = {
    iconRender,
    visibilityToggle,
    value,
    maxLength,
    name,
    onChange,
    placeholder,
    prefix,
  };
  return <StyledInputPassword {...passProps} />;
}

export default InputPassword;

import styled from "@emotion/styled";
import { ReactNode } from "react";
import { EInputTextSize, EStatusInputText } from "../../../core";
import { default as InputCustom } from "./input-text";

const StyledInputText = styled(InputCustom)``;

export interface InputTextProps {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  allowClear?: boolean | { clearIcon: ReactNode };
  bordered?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  showCount?: boolean;
  status?: EStatusInputText;
  prefix?: ReactNode;
  size?: EInputTextSize;
  suffix?: ReactNode;
  value?: string;
  ref?: any;
  placeholder?: string;
  onChange?: () => undefined;
  onPressEnter?: () => any;
  onBlur?: () => any;
  onFocus?: () => any;
  onClick?: () => any;
}

export function InputText({
  addonAfter,
  addonBefore,
  allowClear,
  bordered,
  defaultValue,
  disabled,
  id,
  maxLength,
  showCount,
  status,
  prefix,
  size,
  suffix,
  value,
  ref,
  placeholder,
  onChange,
  onPressEnter,
  onBlur,
  onFocus,
  onClick,
}: InputTextProps) {
  const passProps = {
    addonAfter,
    addonBefore,
    allowClear,
    bordered,
    defaultValue,
    disabled,
    id,
    maxLength,
    showCount,
    status,
    prefix,
    size,
    suffix,
    value,
    ref,
    placeholder,
    onChange,
    onPressEnter,
    onBlur,
    onFocus,
    onClick,
  };
  return <StyledInputText type="text" {...passProps} />;
}

export default InputText;

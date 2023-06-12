import styled from "@emotion/styled";
import { default as RadioGroupCustom } from "./radio-group";
import { ReactNode } from "react";
import { RadioChangeEvent } from "antd";

export interface RadioGroupProps {
  children?: ReactNode;
  buttonStyle?: "outline" | "solid";
  defaultValue?: any;
  disabled?: boolean;
  name?: string;
  options?: string[] | number[];
  optionType?: "default" | "button";
  size?: "large" | "middle" | "small";
  value?: any;
  onChange?: (e: any) => void;
}

const StyledRadioGroup = styled(RadioGroupCustom)``;

export function RadioGroup({
  children,
  buttonStyle,
  defaultValue,
  disabled,
  name,
  onChange,
  optionType,
  options,
  size,
  value,
}: RadioGroupProps) {
  const passProps = {
    buttonStyle,
    defaultValue,
    disabled,
    name,
    onChange,
    optionType,
    options,
    size,
    value,
  };
  return <StyledRadioGroup {...passProps}>{children}</StyledRadioGroup>;
}

export default RadioGroup;

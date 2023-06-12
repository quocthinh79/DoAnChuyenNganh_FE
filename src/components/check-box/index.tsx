import styled from "@emotion/styled";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { ReactNode } from "react";
import { default as CheckBoxCustom } from "./check-box";
import { noop } from "@constant";

export interface CheckBoxProps {
  autoFocus?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: () => void;
  children?: ReactNode;
  value?: boolean;
}

const StyledCheckBox = styled(CheckBoxCustom)``;

export function CheckBox({
  autoFocus = false,
  value = false,
  defaultChecked = false,
  disabled = false,
  indeterminate = false,
  onChange = noop,
  children,
}: CheckBoxProps) {
  const passProps = {
    autoFocus,
    checked: value,
    defaultChecked,
    disabled,
    indeterminate,
    onChange,
  };
  return <StyledCheckBox {...passProps}>{children}</StyledCheckBox>;
}

export default CheckBox;

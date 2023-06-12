import styled from "@emotion/styled";
import { default as RadioCustom } from "./radio";
import { ReactNode } from "react";

export interface RadioProps {
  children?: ReactNode;
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: ReactNode;
}

const StyledRadio = styled(RadioCustom)``;

export function Radio({
  children,
  autoFocus,
  checked = false,
  defaultChecked = false,
  disabled,
  value,
}: RadioProps) {
  const passProps = {
    autoFocus,
    checked,
    defaultChecked,
    disabled,
    value,
  };
  return <StyledRadio {...passProps}>{children}</StyledRadio>;
}

export default Radio;

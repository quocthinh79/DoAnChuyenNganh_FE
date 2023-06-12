import styled from "@emotion/styled";
import { ReactNode } from "react";
import {
  EButtonTypes,
  EHtmlButtonTypes,
  EShapeButton,
  ESizeButton,
} from "../../core";
import { default as ButtonCustom } from "./button";

const StyledButton = styled(ButtonCustom)``;

export interface ButtonProps {
  block?: boolean;
  danger?: boolean;
  disable?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: EHtmlButtonTypes;
  icon?: ReactNode;
  loading?: boolean | { delay: number };
  shape?: EShapeButton;
  size?: ESizeButton;
  target?: string;
  type?: EButtonTypes;
  onClick?: (event: any) => void;
  children?: ReactNode;
}

export function Button({
  block,
  danger,
  disable,
  ghost,
  href,
  htmlType = EHtmlButtonTypes.Button,
  icon,
  loading = false,
  shape = EShapeButton.Default,
  size = ESizeButton.Middle,
  target,
  type = EButtonTypes.Default,
  onClick,
  children,
}: ButtonProps) {
  const passProps = {
    block,
    danger,
    disable,
    ghost,
    href,
    htmlType,
    icon,
    loading,
    shape,
    size,
    target,
    type,
    onClick,
  };
  return <StyledButton {...passProps}>{children}</StyledButton>;
}

export default Button;

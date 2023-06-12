import styled from "@emotion/styled";
import { ReactNode } from "react";
import { EButtonTypes } from "../../core";
import { default as PopConfirmCustom } from "./popconfirm";
import { ButtonProps } from "antd";

const StyledPopConfirm = styled(PopConfirmCustom)``;

export interface PopConfirmProps {
  title: ReactNode;
  cancelButtonProps?: ButtonProps;
  cancelText?: string;
  disabled?: boolean;
  icon?: ReactNode;
  okButtonProps?: ButtonProps;
  okText?: string;
  okType?: EButtonTypes;
  showCancel?: boolean;
  description?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  children?: ReactNode;
}

function PopConfirm({
  title,
  cancelButtonProps,
  cancelText,
  disabled,
  icon,
  okButtonProps,
  okText,
  okType,
  showCancel,
  description,
  onCancel,
  onConfirm,
  children,
}: PopConfirmProps) {
  const passProps = {
    title,
    cancelButtonProps,
    cancelText,
    disabled,
    icon,
    okButtonProps,
    okText,
    okType,
    showCancel,
    description,
    onCancel,
    onConfirm,
  };
  return <StyledPopConfirm {...passProps}>{children}</StyledPopConfirm>;
}

export default PopConfirm;

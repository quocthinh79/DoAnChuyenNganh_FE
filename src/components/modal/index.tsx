import { ReactNode } from "react";
// import { ButtonProps } from "../button";
import { default as CustomModal } from "./modal";
import styled from "@emotion/styled";
import { EModalWidth } from "@core";
import { useTheme } from "@emotion/react";
import { noop } from "@constant";
import { ButtonProps } from "antd";

export interface ModalProps {
  afterClose?: () => any;
  autoFocusButton?: null | "ok" | "cancel";
  cancelText?: string;
  okText?: string;
  centered?: boolean;
  closable?: boolean;
  closeIcon?: ReactNode;
  content?: ReactNode;
  title?: ReactNode;
  width?: EModalWidth;
  zIndex?: number;
  onCancel?: () => any;
  onOk?: () => any;
  open?: boolean;
  cancelButtonProps?: ButtonProps;
  okButtonProps?: ButtonProps;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  destroyOnClose?: boolean;
  forceRender?: boolean;
  confirmLoading?: boolean;
}

const StyledModal = styled(CustomModal)`
  .ant-modal-content {
    max-height: 95vh;
    overflow: auto;
  }
`;
export function Modal({
  afterClose,
  autoFocusButton = "ok",
  cancelText = "Cancel",
  okText = "OK",
  centered = true,
  closable = true,
  closeIcon = undefined,
  content,
  title,
  width = EModalWidth.Medium,
  zIndex = 1000,
  onCancel = noop,
  onOk = noop,
  cancelButtonProps,
  okButtonProps,
  open,
  footer,
  children,
  className,
  destroyOnClose = true,
  forceRender = false,
  confirmLoading = false,
}: ModalProps) {
  const theme = useTheme();

  const passProps = {
    afterClose,
    autoFocusButton,
    cancelText,
    okText,
    centered,
    closable,
    closeIcon,
    content,
    title,
    width: theme?.[width],
    zIndex,
    onCancel,
    onOk,
    open,
    cancelButtonProps,
    okButtonProps,
    footer,
    className,
    destroyOnClose,
    forceRender,
    confirmLoading,
  };

  return <StyledModal {...passProps}>{children}</StyledModal>;
}

export default Modal;

import styled from "@emotion/styled";
import { default as CheckableTagCustom } from "./checkable-tag";
import { ReactNode, memo } from "react";

const StyledCheckableTag = styled(CheckableTagCustom)``;

export interface CheckableTagProps {
  checked: boolean;
  children?: ReactNode;
  closable?: boolean;
  closeIcon?: ReactNode;
  color?: string;
  icon?: ReactNode;
  onClose?: (e: any) => any;
  onChange?: (e: any) => any;
}

export const CheckableTag = ({
  checked,
  children,
  closable = false,
  closeIcon,
  color,
  icon,
  onClose,
  onChange,
}: CheckableTagProps) => {
  const passProps = {
    closable,
    closeIcon,
    color,
    icon,
    checked,
    onClose,
    onChange,
  };
  return <StyledCheckableTag {...passProps}>{children}</StyledCheckableTag>;
};

export default memo(CheckableTag);

import styled from "@emotion/styled";
import { default as TagCustom } from "./tag";
import { ReactNode } from "react";

const StyledTag = styled(TagCustom)``;

export interface TagProps {
  closable?: boolean;
  closeIcon?: ReactNode;
  color?: string;
  icon?: ReactNode;
  children?: ReactNode;
  onClose?: (e: any) => void;
}

export const Tag = ({
  closable = false,
  closeIcon,
  color,
  icon,
  onClose,
  children,
}: TagProps) => {
  const passProps = { closable, closeIcon, color, icon, onClose };
  return <StyledTag {...passProps}>{children}</StyledTag>;
};

export default Tag;

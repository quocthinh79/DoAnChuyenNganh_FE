import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { default as DescriptionItemCustom } from "./description-item";

const StyledDescriptionItem = styled(DescriptionItemCustom)``;

export interface DescriptionItemProps {
  children?: ReactNode;
  contentStyle?: CSSProperties;
  label?: ReactNode;
  labelStyle?: CSSProperties;
  span?: number;
}

export function DescriptionItem({
  children,
  contentStyle,
  label,
  labelStyle,
  span,
}: DescriptionItemProps) {
  const passProps = { contentStyle, label, labelStyle, span };
  return (
    <StyledDescriptionItem {...passProps}>{children}</StyledDescriptionItem>
  );
}

export default DescriptionItem;

import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { default as GridCardCustom } from "./grid-card";

const StyledGridCard = styled(GridCardCustom)``;

export interface GridCardProps {
  className?: string;
  hoverable?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export function GridCard({
  className,
  hoverable,
  style,
  children,
}: GridCardProps) {
  const passProps = { className, hoverable, style };
  return <StyledGridCard {...passProps}>{children}</StyledGridCard>;
}

export default GridCard;

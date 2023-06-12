import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as BadgeRibbonCustom } from "./badge-ribbon";

export interface BadgeRibbonProps {
  color?: string;
  placement?: "start" | "end";
  text?: ReactNode;
  children?: ReactNode;
}

const StyledBadgeRibbon = styled(BadgeRibbonCustom)``;

export function BadgeRibbon({
  color,
  placement,
  text,
  children,
}: BadgeRibbonProps) {
  const passProps = { color, placement, text };
  return <StyledBadgeRibbon {...passProps}>{children}</StyledBadgeRibbon>;
}

export default BadgeRibbon;

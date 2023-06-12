import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as SpaceCompactCustom } from "./space-compact";

export interface SpaceCompactProps {
  children?: ReactNode;
  block?: boolean;
  direction?: "vertical" | "horizontal";
  size?: "large" | "middle" | "small";
}

const StyledSpaceCompact = styled(SpaceCompactCustom)``;

export function SpaceCompact({
  children,
  block,
  direction,
  size,
}: SpaceCompactProps) {
  const passProps = { block, direction, size };
  return <StyledSpaceCompact {...passProps}>{children}</StyledSpaceCompact>;
}

export default SpaceCompact;

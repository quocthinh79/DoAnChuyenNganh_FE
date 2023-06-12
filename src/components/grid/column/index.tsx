import styled from "@emotion/styled";
import { default as ColCustom } from "./column";
import { ReactNode } from "react";

const StyledCol = styled(ColCustom)``;

export interface ColProps {
  children?: ReactNode;
  flex?: string | number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  span?: number;
  xs?: number | object;
  sm?: number | object;
  md?: number | object;
  lg?: number | object;
  xl?: number | object;
  xxl?: number | object;
}

export function Col({
  children,
  flex,
  lg,
  md,
  offset,
  order,
  pull,
  push,
  sm,
  span,
  xl,
  xs,
  xxl,
}: ColProps) {
  const passProps = {
    flex,
    lg,
    md,
    offset,
    order,
    pull,
    push,
    sm,
    span,
    xl,
    xs,
    xxl,
  };
  return <StyledCol {...passProps}>{children}</StyledCol>;
}

export default Col;

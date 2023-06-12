import styled from "@emotion/styled";
import { default as RowCustom } from "./row";
import { ReactNode } from "react";

const StyledRow = styled(RowCustom)``;

export interface RowProps {
  align?:
    | "top"
    | "middle"
    | "bottom"
    | "stretch"
    | {
        [key in "xs" | "sm" | "md" | "lg" | "xl" | "xxl"]:
          | "top"
          | "middle"
          | "bottom"
          | "stretch";
      };
  gutter?: number | object | [number, number];
  justify?:
    | "start"
    | "end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | {
        [key in "xs" | "sm" | "md" | "lg" | "xl" | "xxl"]:
          | "start"
          | "end"
          | "center"
          | "space-around"
          | "space-between"
          | "space-evenly";
      };
  wrap?: boolean;
  children?: ReactNode;
}

export function Row({ align, gutter, justify, wrap, children }: RowProps) {
  const passProps = { align, gutter, justify, wrap };
  return (
    <StyledRow style={{ position: "relative" }} {...passProps}>
      {children}
    </StyledRow>
  );
}

export default Row;

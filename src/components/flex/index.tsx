import { cx } from "@emotion/css";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import {
  EDirectionFlex,
  EFlexAlign,
  EJustifyFlex,
  EWrapFlex,
  templateStringToClassName,
} from "../../core";

export interface FlexProps {
  align?: EFlexAlign;
  basis?: string | number;
  direction?: EDirectionFlex;
  gap?: string | number;
  grow?: number | string;
  justify?: EJustifyFlex;
  shrink?: number | string;
  spacing?: number | string;
  width?: string | number;
  height?: string | number;
  wrap?: EWrapFlex;
  children?: ReactNode;
  className?: string;
}

const StyledFlex = styled("div")``;

export function Flex({
  align = EFlexAlign.Stretch,
  basis = "auto",
  children,
  className,
  direction = EDirectionFlex.Row,
  gap = 0,
  grow = 0,
  justify = EJustifyFlex.FlexStart,
  shrink = 1,
  spacing = 0,
  width = "100%",
  height = "100%",
  wrap = EWrapFlex.Nowrap,
}: FlexProps) {
  if (typeof gap === "number") gap = `${gap}px`;

  const passProps = {
    className: cx(
      className,
      templateStringToClassName()`
        align-items: ${align};
        display: flex;
        flex-basis: ${basis};
        flex-direction: ${direction};
        flex-grow: ${grow};
        flex-shrink: ${shrink};
        flex-wrap: ${wrap};
        gap: ${gap};
        justify-content: ${justify};
        width: ${width};
        height: ${height};
      `
    ),
  };

  return <StyledFlex {...passProps}>{children}</StyledFlex>;
}

export default Flex;

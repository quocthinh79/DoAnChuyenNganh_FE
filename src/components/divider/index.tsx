import styled from "@emotion/styled";
import { default as DividerCustom } from "./divider";
import { ReactNode, CSSProperties } from "react";
import { EDirectionType } from "../../core";

const StyledDivider = styled(DividerCustom)``;

export interface DividerProps {
  children?: ReactNode;
  className?: string;
  dashed?: boolean;
  orientation?: "left" | "right" | "center";
  orientationMargin?: string | number;
  plain?: boolean;
  style?: CSSProperties;
  type?: EDirectionType;
}

export const Divider = ({
  children,
  className,
  dashed,
  orientation = "center",
  orientationMargin,
  plain = true,
  style,
  type = EDirectionType.Horizontal,
}: DividerProps) => {
  const passProps = {
    children,
    className,
    dashed,
    orientation,
    orientationMargin,
    plain,
    style,
    type,
  };
  return <StyledDivider {...passProps} />;
};

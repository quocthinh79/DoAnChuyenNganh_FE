import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { EDirectionType } from "../../core";
import { default as DescriptionCustom } from "./descriptions";

const StyledDescription = styled(DescriptionCustom)``;

export interface DescriptionProps {
  bordered?: boolean;
  colon?: boolean;
  column?: number;
  contentStyle?: CSSProperties;
  extra?: ReactNode;
  labelStyle?: CSSProperties;
  layout?: EDirectionType;
  size?: "default" | "middle" | "small";
  title?: ReactNode;
  children?: ReactNode;
}

export function Description({
  bordered,
  colon = true,
  column = 3,
  contentStyle,
  extra,
  labelStyle,
  layout = EDirectionType.Horizontal,
  size = "default",
  title,
  children,
}: DescriptionProps) {
  const passProps = {
    bordered,
    colon,
    column,
    contentStyle,
    extra,
    labelStyle,
    layout,
    size,
    title,
  };
  return <StyledDescription {...passProps}>{children}</StyledDescription>;
}

export default Description;

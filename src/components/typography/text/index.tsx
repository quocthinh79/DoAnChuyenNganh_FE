import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Copyable, Editable, Ellipsis } from "../general-types";
import { default as TextCustom } from "./text";
import {
  EContentTypeTypography,
  ETextAlign,
  templateStringToClassName,
} from "@core";
import { noop } from "@constant";

const StyledText = styled(TextCustom)``;
const StyledWrapText = styled("div")``;

export interface TextProps {
  //   delete // TODO Missing type
  code?: boolean;
  copyable?: boolean | Copyable;
  disabled?: boolean;
  editable?: boolean | Editable;
  ellipsis?: boolean | Omit<Ellipsis, "expandable" | "rows" | "onExpand">;
  italic?: boolean;
  keyboard?: boolean;
  mark?: boolean;
  strong?: boolean;
  textAlign?: ETextAlign;
  type?: EContentTypeTypography;
  underline?: boolean;
  children?: ReactNode;
  textColor?: string;
  onClick?: (event: any) => void;
}

export function Text({
  code = false,
  copyable = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  italic = false,
  keyboard = false,
  mark = false,
  strong = false,
  textAlign,
  type,
  underline = false,
  children,
  textColor,
  onClick = noop,
}: TextProps) {
  const passProps = {
    code,
    copyable,
    disabled,
    editable,
    ellipsis,
    italic,
    keyboard,
    mark,
    strong,
    type,
    underline,
    onClick,
  };

  const textElement = (
    <StyledText
      className={templateStringToClassName()`color: ${textColor}`}
      {...passProps}
    >
      {children}
    </StyledText>
  );

  return textAlign ? (
    <StyledWrapText
      className={templateStringToClassName()`
          text-align: ${textAlign}
    `}
    >
      {textElement}
    </StyledWrapText>
  ) : (
    textElement
  );
}

export default Text;

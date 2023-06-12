import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Copyable, Editable, Ellipsis } from "../general-types";
import { default as ParagraphCustom } from "./paragraph";
import { EContentTypeTypography } from "@core";
import { noop } from "@constant";

const StyledParagraph = styled(ParagraphCustom)``;

export interface ParagraphProps {
  children?: ReactNode;
  code?: boolean;
  copyable?: boolean | Copyable;
  //   delete // TODO Missing prop
  disabled?: boolean;
  editable?: boolean | Editable;
  ellipsis?: boolean | Ellipsis;
  mark?: boolean;
  onClick?: (event: any) => void; // TODO: any type
  strong?: boolean;
  italic?: boolean;
  type?: EContentTypeTypography;
  underline?: boolean;
}

export default function Paragraph({
  children,
  code = false,
  copyable = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  mark = false,
  onClick = noop,
  strong = false,
  italic = false,
  type,
  underline = false,
}: ParagraphProps) {
  const passProps = {
    code,
    copyable,
    disabled,
    editable,
    ellipsis,
    mark,
    onClick,
    strong,
    italic,
    type,
    underline,
  };
  return <StyledParagraph {...passProps}>{children}</StyledParagraph>;
}

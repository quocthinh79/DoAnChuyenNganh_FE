import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Copyable, Editable, Ellipsis } from "../general-types";
import { default as TitleCustom } from "./title";
import {
  EContentTypeTypography,
  ELevelTile,
  ETextAlign,
  templateStringToClassName,
} from "@core";

const StyledTitle = styled(TitleCustom)``;
const StyledDivWrap = styled("div")``;

export interface TitleProps {
  children?: ReactNode;
  code?: boolean;
  copyable?: boolean | Copyable;
  disabled?: boolean;
  editable?: boolean | Editable;
  ellipsis?: boolean | Ellipsis;
  italic?: boolean;
  level?: ELevelTile;
  mark?: boolean;
  textAlign?: ETextAlign;
  type?: EContentTypeTypography;
  underline?: boolean;
  onClick?: (event: any) => void; // TODO: any type
}

export const Title = ({
  children,
  code = false,
  copyable = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  italic = false,
  level = ELevelTile.H1,
  mark = false,
  textAlign,
  type,
  underline = false,
  onClick = () => undefined,
}: TitleProps) => {
  const passProps = {
    code,
    copyable,
    disabled,
    editable,
    ellipsis,
    italic,
    level,
    mark,
    type,
    underline,
    onClick,
  };
  const titleElement = <StyledTitle {...passProps}>{children}</StyledTitle>;

  return textAlign ? (
    <StyledDivWrap
      className={templateStringToClassName()`text-align: ${textAlign};`}
    >
      {titleElement}
    </StyledDivWrap>
  ) : (
    titleElement
  );
};

export default Title;

import styled from "@emotion/styled";
import { ReactNode } from "react";
import {
  EAlignSpace,
  EDirectionType,
  templateStringToClassName,
} from "../../core";
import { default as SpaceCustom } from "./space";

const StyledSpace = styled(SpaceCustom)``;

export enum SizeProps {
  Small = "small",
  Middle = "middle",
  Large = "large",
}

export interface SpaceProps {
  align?: EAlignSpace;
  direction?: EDirectionType;
  split?: ReactNode;
  wrap?: boolean;
  size?: SizeProps;
  children?: ReactNode;
  widthFull?: boolean;
}

export function Space({
  align,
  direction = EDirectionType.Vertical,
  size = SizeProps.Small,
  split,
  wrap,
  children,
  widthFull,
}: SpaceProps) {
  const passProps = { align, direction, size, split, wrap };
  return (
    <StyledSpace
      className={templateStringToClassName()`${
        widthFull ? "width: 100%;" : "width: auto;"
      }`}
      {...passProps}
    >
      {children}
    </StyledSpace>
  );
}

export default Space;

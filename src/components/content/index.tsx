import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { default as ContentCustom } from "./content";

const StyledContent = styled(ContentCustom)``;

export interface ContentProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Content({ children, className, style }: ContentProps) {
  const passProps = { className, style };
  return <StyledContent {...passProps}>{children}</StyledContent>;
}

export default Content;

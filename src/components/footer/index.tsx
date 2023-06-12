import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { default as FooterCustom } from "./footer";

const StyledFooter = styled(FooterCustom)``;

export interface FooterProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Footer({ children, className, style }: FooterProps) {
  const passProps = { className, style };
  return <StyledFooter {...passProps}>{children}</StyledFooter>;
}

export default Footer;

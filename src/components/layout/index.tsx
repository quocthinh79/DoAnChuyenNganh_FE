import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as CustomLayout } from "./layout";

const StyledLayout = styled(CustomLayout)``;

export interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  const passProps = { className };
  return <StyledLayout {...passProps}>{children}</StyledLayout>;
}

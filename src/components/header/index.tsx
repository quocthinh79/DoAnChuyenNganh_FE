import { cx } from "@emotion/css";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { templateStringToClassName } from "../../core";
import { default as HeaderCustom } from "./header";

export interface HeaderProps {
  children?: ReactNode;
  className?: string;
  position?: "fixed" | "sticky";
}

const StyledHeader = styled(HeaderCustom)`
  background-color: white;
`;

export function Header({ children, className, position }: HeaderProps) {
  const passProps = {
    className: cx(
      className,
      templateStringToClassName()`
      ${position === "fixed" ? `top: 0; left: 0; right: 0;` : ""}
        position: ${position ? position : ""}
  `
    ),
  };
  return <StyledHeader {...passProps}>{children}</StyledHeader>;
}

export default Header;

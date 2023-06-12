import styled from "@emotion/styled";
import { ReactNode } from "react";
import { ETargetAnchor } from "../../../core";
import { default as LinkCustom } from "./link";

const StyledLink = styled(LinkCustom)``;

export interface LinkProps {
  href?: string;
  target?: ETargetAnchor;
  children?: ReactNode;
}

export function Link({
  href = "/",
  target = ETargetAnchor.Self,
  children,
}: LinkProps) {
  const passProps = { href, target };
  return <StyledLink {...passProps}>{children}</StyledLink>;
}

export default Link;

import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { EBreakpoint } from "../../core";
import { default as SiderCustom } from "./sider";

const StyledSider = styled(SiderCustom)``;

export interface SiderProps {
  //   theme
  breakpoint?: EBreakpoint;
  children?: ReactNode;
  className?: string;
  collapsed?: boolean;
  collapsedWidth?: number;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  reverseArrow?: boolean;
  style?: CSSProperties;
  trigger?: ReactNode;
  width?: number | string;
  zeroWidthTriggerStyle?: object;
  onBreakpoint?: (broken: any) => {};
  onCollapse?: (collapsed: any, type: any) => {};
}

export function Sider({
  breakpoint,
  children,
  className,
  collapsed,
  collapsedWidth,
  collapsible,
  defaultCollapsed,
  reverseArrow,
  style,
  trigger,
  width,
  zeroWidthTriggerStyle,
  onBreakpoint,
  onCollapse,
}: SiderProps) {
  const passProps = {
    breakpoint,
    className,
    collapsed,
    collapsedWidth,
    collapsible,
    defaultCollapsed,
    reverseArrow,
    style,
    trigger,
    width,
    zeroWidthTriggerStyle,
    onBreakpoint,
    onCollapse,
  };
  return <StyledSider {...passProps}>{children}</StyledSider>;
}

export default Sider;

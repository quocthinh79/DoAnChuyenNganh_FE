import styled from "@emotion/styled";
import { default as CollapseCustom } from "./collapse";
import { ReactNode } from "react";

const StyledCollapse = styled(CollapseCustom)``;

export interface CollapseProps {
  accordion?: boolean;
  activeKey?: string[] | string | number[] | number;
  bordered?: boolean;
  collapsible?: "header" | "icon" | "disabled";
  defaultActiveKey?: string[] | string | number[] | number;
  destroyInactivePanel?: boolean;
  expandIcon?: (panelProps: any) => ReactNode;
  expandIconPosition?: "start" | "end";
  ghost?: boolean;
  size?: "large" | "middle" | "small";
  onChange?: (e: any) => void;
  children?: ReactNode;
}

export const Collapse = ({
  accordion,
  activeKey,
  bordered,
  collapsible,
  defaultActiveKey,
  destroyInactivePanel,
  expandIcon,
  expandIconPosition,
  ghost,
  onChange,
  size,
  children,
}: CollapseProps) => {
  const passProps = {
    accordion,
    activeKey,
    bordered,
    collapsible,
    defaultActiveKey,
    destroyInactivePanel,
    expandIcon,
    expandIconPosition,
    ghost,
    onChange,
    size,
  };
  return <StyledCollapse {...passProps}>{children}</StyledCollapse>;
};

export default Collapse;

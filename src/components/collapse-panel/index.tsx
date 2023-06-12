import styled from "@emotion/styled";
import { default as CollapsePanelCustom } from "./collapse-panel";
import { ReactNode } from "react";

const StyledCollapsePanel = styled(CollapsePanelCustom)``;

export interface CollapsePanelProps {
  key: string | number;
  collapsible?: "header" | "icon" | "disabled";
  extra?: ReactNode;
  forceRender?: boolean;
  showArrow?: boolean;
  header?: ReactNode;
  children?: ReactNode;
}

export const CollapsePanel = ({
  collapsible,
  extra,
  forceRender,
  header,
  key,
  showArrow,
  children,
}: CollapsePanelProps) => {
  const passProps = { collapsible, extra, forceRender, header, key, showArrow };
  return <StyledCollapsePanel {...passProps}>{children}</StyledCollapsePanel>;
};

export default CollapsePanel;

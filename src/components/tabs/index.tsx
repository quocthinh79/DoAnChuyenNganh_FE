import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { default as TabsCustom } from "./tabs";

const StyledTabs = styled(TabsCustom)``;

export interface TabItemType {
  closeIcon?: ReactNode;
  disabled?: boolean;
  forceRender?: boolean;
  key: string;
  label: ReactNode;
  children?: ReactNode;
}

export interface TabsProps {
  defaultActiveKey?: string;
  items: TabItemType[];
  onChange?: (activeKey: any) => undefined;
}

export function Tabs({ defaultActiveKey, items = [], onChange }: TabsProps) {
  const passProps = { defaultActiveKey, items, onChange };
  return <StyledTabs {...passProps} />;
}

export default Tabs;

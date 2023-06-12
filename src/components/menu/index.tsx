import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as MenuCustom } from "./menu";
import { EModeMenu, ETriggerSubMenuAction, ItemType } from "@core";

const StyledMenu = styled(MenuCustom)`
  .ant-menu-item {
    height: auto;
  }
`;

export interface MenuProps {
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
  expandIcon?: ReactNode;
  forceSubMenuRender?: boolean;
  inlineCollapsed?: boolean;
  inlineIndent?: number;
  items?: ItemType[];
  mode?: EModeMenu;
  multiple?: boolean;
  openKeys?: string[];
  overflowedIndicator?: ReactNode;
  selectable?: boolean;
  selectedKeys?: string[];
  subMenuCloseDelay?: number;
  subMenuOpenDelay?: number;
  triggerSubMenuAction?: ETriggerSubMenuAction;
  // theme?: ETheme;
  children?: ReactNode;
  onClick?: ({ item, key, keyPath, domEvent }: any) => void;
  onDeselect?: ({ item, key, keyPath, selectedKeys, domEvent }: any) => void;
  onOpenChange?: (openKeys: string[]) => void;
  onSelect?: ({ item, key, keyPath, selectedKeys, domEvent }: any) => void;
}

export function Menu({
  defaultOpenKeys,
  defaultSelectedKeys,
  expandIcon,
  forceSubMenuRender,
  inlineCollapsed,
  inlineIndent,
  items,
  mode,
  multiple,
  openKeys,
  overflowedIndicator,
  selectable,
  selectedKeys,
  subMenuCloseDelay,
  subMenuOpenDelay,
  triggerSubMenuAction,
  // theme,
  children,
  onClick,
  onDeselect,
  onOpenChange,
  onSelect,
}: MenuProps) {
  const passProps = {
    defaultOpenKeys,
    defaultSelectedKeys,
    expandIcon,
    forceSubMenuRender,
    inlineCollapsed,
    inlineIndent,
    items,
    mode,
    multiple,
    openKeys,
    overflowedIndicator,
    selectable,
    selectedKeys,
    subMenuCloseDelay,
    subMenuOpenDelay,
    triggerSubMenuAction,
    // theme,
    onClick,
    onDeselect,
    onOpenChange,
    onSelect,
  };
  return <StyledMenu {...passProps}>{children}</StyledMenu>;
}

export default Menu;

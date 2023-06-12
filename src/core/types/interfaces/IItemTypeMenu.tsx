import { Key, ReactNode } from "react";
import ETheme from "../enums/ETheme";

interface TitleEventEntity {
  key: string;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export interface MenuItemType {
  danger?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  key: string;
  label?: ReactNode;
  title?: string;
}

export interface SubMenuType {
  children?: ItemType[];
  disabled?: boolean;
  icon?: ReactNode;
  key: string;
  label?: ReactNode;
  popupClassName?: string;
  popupOffset?: [number, number];
  theme?: ETheme;
  onTitleClick?: (e: TitleEventEntity) => void;
  onTitleMouseEnter?: (e: TitleEventEntity) => void;
  onTitleMouseLeave?: (e: TitleEventEntity) => void;
}

export interface MenuItemGroupType {
  type: "group";
  children?: MenuItemType[];
  label?: ReactNode;
}

export interface MenuDividerType {
  type: "divider";
  dashed?: boolean;
}

export type ItemType =
  | MenuItemType
  | SubMenuType
  | MenuItemGroupType
  | MenuDividerType;

export default ItemType;

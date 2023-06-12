import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { ESizeCard } from "../../core";
import { default as CardCustom } from "./card";

const StyledCard = styled(CardCustom)``;

export interface CardProps {
  actions?: ReactNode[];
  activeTabKey?: string;
  bodyStyle?: CSSProperties;
  bordered?: boolean;
  cover?: ReactNode;
  defaultActiveTabKey?: string;
  extra?: ReactNode;
  headStyle?: CSSProperties;
  hoverable?: boolean;
  loading?: boolean;
  size?: ESizeCard;
  tabBarExtraContent?: ReactNode;
  tabList?: { key: string; tab: ReactNode }[];
  //   tabProps // TODO Missing prop
  title?: ReactNode;
  type?: string;
  children?: ReactNode;
  onTabChange?: (key: any) => void; // TODO: any type
}

export function Card({
  actions,
  activeTabKey,
  bodyStyle,
  bordered,
  cover,
  defaultActiveTabKey,
  extra,
  headStyle,
  hoverable,
  loading,
  size,
  tabBarExtraContent,
  tabList,
  title,
  children,
  onTabChange,
}: CardProps) {
  const passProps = {
    actions,
    activeTabKey,
    bodyStyle,
    bordered,
    cover,
    defaultActiveTabKey,
    extra,
    headStyle,
    hoverable,
    loading,
    size,
    tabBarExtraContent,
    tabList,
    title,
    onTabChange,
  };
  return <StyledCard {...passProps}>{children}</StyledCard>;
}

export default Card;

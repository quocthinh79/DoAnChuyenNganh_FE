import { ReactNode } from "react";

import { default as CustomBreadCrumbs } from "./breadcrumb";
import styled from "@emotion/styled";

export interface BreadcrumbItemType {
  href?: string;
  key?: React.Key;
  path?: string;
  title: React.ReactNode;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItemType[];
  params?: object;
  separator?: ReactNode;
  className?: string;
}

const StyledBreadcrumb = styled(CustomBreadCrumbs)``;

export function Breadcrumb({
  params,
  separator = "/",
  items = [],
  className,
}: BreadcrumbProps) {
  const passProps = { items, params, separator, className };

  return <StyledBreadcrumb {...passProps} />;
}

export default Breadcrumb;

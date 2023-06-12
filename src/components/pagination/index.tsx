import styled from "@emotion/styled";
import { default as PaginationCustom } from "./pagination";
import { ReactNode } from "react";

const StyledPagination = styled(PaginationCustom)`
  display: flex;
  justify-content: center;
`;

export interface PaginationProps {
  current?: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  //   itemRender //TODO: Missing prop
  pageSize?: number;
  pageSizeOptions?: string[] | number[];
  responsive?: boolean;
  showLessItems?: boolean;
  showQuickJumper?: boolean | { goButton: ReactNode };
  showSizeChanger?: boolean;
  showTitle?: boolean;
  //   showTotal?: (total: any, range: any) => void; //TODO: Missing prop
  simple?: boolean;
  size?: "default" | "small";
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (current: any, size: any) => void;
}

export const Pagination = ({
  current = 1,
  defaultCurrent = 1,
  defaultPageSize = 10,
  disabled,
  hideOnSinglePage,
  onChange,
  onShowSizeChange,
  pageSize = 10,
  pageSizeOptions,
  responsive,
  showLessItems,
  showQuickJumper,
  showSizeChanger = false,
  showTitle,
  //   showTotal,
  simple,
  size = "default",
  total = 0,
}: PaginationProps) => {
  const passProps = {
    current,
    defaultCurrent,
    defaultPageSize,
    disabled,
    hideOnSinglePage,
    onChange,
    onShowSizeChange,
    pageSize,
    pageSizeOptions,
    responsive,
    showLessItems,
    showQuickJumper,
    showSizeChanger,
    showTitle,
    //     showTotal,
    simple,
    size,
    total,
  };
  return <StyledPagination {...passProps} />;
};

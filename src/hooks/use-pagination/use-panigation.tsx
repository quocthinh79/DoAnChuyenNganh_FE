import { useState } from "react";

export interface usePagination {
  currentPage?: number;
  handleChange?: (page: number, pageSize: number) => void;
}

export interface usePaginationProps {
  page: number;
}

export function usePagination({ page }: usePaginationProps): usePagination {
  const [currentPage, setCurrentPage] = useState<number>(page);

  const handleChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    handleChange,
  };
}

export default usePagination;

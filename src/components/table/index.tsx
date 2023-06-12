import styled from "@emotion/styled";
import { ColumnType } from "antd/es/table";
import { default as TableCustom } from "./table";

const StyledTable = styled(TableCustom)``;

export interface TableProps {
  components?: any;
  bordered?: boolean;
  dataSource?: object[];
  columns?: ColumnType<object>[];
}

function Table({
  components,
  bordered = false,
  dataSource,
  columns = [],
}: TableProps) {
  const passProps = { components, bordered, dataSource, columns };
  return <StyledTable {...passProps}></StyledTable>;
}

export default Table;

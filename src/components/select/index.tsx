import styled from "@emotion/styled";
import { default as SelectCustom } from "./select";
import { BaseOptionType } from "antd/es/select";

export interface OptionsSelect {
  label: any;
  value: any;
}

export interface SelectProps {
  value?: string;
  onChange?: (
    value: any,
    option: BaseOptionType | Array<BaseOptionType>
  ) => void;
  showSearch?: boolean;
  placeholder?: string;
  filterOption?: (inputValue: any, option: any) => boolean | boolean;
  options: OptionsSelect[];
  open?: boolean;
  loading?: boolean;
  mode?: "multiple" | "tags";
}

const StyledSelect = styled(SelectCustom)``;

export function Select({
  onChange,
  value,
  options,
  filterOption,
  placeholder,
  showSearch,
  open,
  loading = false,
  mode,
}: SelectProps) {
  const passProps = {
    onChange,
    value,
    options,
    filterOption,
    placeholder,
    showSearch,
    open,
    loading,
    mode,
  };
  return <StyledSelect {...passProps} />;
}

export default Select;

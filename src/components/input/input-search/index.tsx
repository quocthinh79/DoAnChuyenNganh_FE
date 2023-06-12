import styled from "@emotion/styled";
import { ReactNode } from "react";
import { InputTextProps } from "../input-text";
import { default as InputSearchCustom } from "./input-search";
import { noop } from "@constant";

const StyledInputSearch = styled(InputSearchCustom)`
  width: auto;
`;

export interface InputSearchProps extends InputTextProps {
  enterButton?: boolean | ReactNode;
  loading?: boolean;
  onSearch?: (value: any, event: any) => void;
}

function InputSearch({
  placeholder,
  enterButton,
  size,
  loading,
  onSearch = noop,
  value,
  onChange,
}: InputSearchProps) {
  const passProps = {
    placeholder,
    enterButton,
    size,
    loading,
    value,
    onSearch,
    onChange,
  };
  return <StyledInputSearch {...passProps} />;
}

export default InputSearch;

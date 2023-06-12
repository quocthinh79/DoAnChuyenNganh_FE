import styled from "@emotion/styled";
import { ReactNode, forwardRef } from "react";
import { default as InputNumberCustom } from "./input-number";

export interface InputNumberProps {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  bordered?: boolean;
  defaultValue?: number;
  value?: number;
  ref?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  onChange?: () => undefined;
}

const StyledInputNumber = styled(InputNumberCustom)``;

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      addonAfter,
      addonBefore,
      bordered,
      defaultValue,
      value,
      placeholder,
      onChange,
    },
    ref
  ) => {
    const passProps = {
      addonAfter,
      addonBefore,
      bordered,
      defaultValue,
      value,
      placeholder,
      onChange,
    };
    return <StyledInputNumber ref={ref} {...passProps} />;
  }
);

export default InputNumber;

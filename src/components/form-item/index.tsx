import styled from "@emotion/styled";
import { Rule } from "antd/es/form";
import { ReactNode } from "react";
import { default as FormItemCustom } from "./form-item";

const StyledFormItem = styled(FormItemCustom)``;

export interface FormItemProps {
  name?: string | number | (string | number)[];
  rules?: Rule[];
  children?: ReactNode;
  valuePropName?: string;
  wrapperCol?: object;
  label?: string;
  initialValue?: string;
}

export function FormItem({
  name,
  rules,
  children,
  valuePropName,
  wrapperCol,
  label,
  initialValue,
}: FormItemProps) {
  const passProps = {
    name,
    rules,
    valuePropName,
    wrapperCol,
    label,
    initialValue,
  };
  return (
    <StyledFormItem style={{ margin: 0 }} {...passProps}>
      {children}
    </StyledFormItem>
  );
}

export default FormItem;

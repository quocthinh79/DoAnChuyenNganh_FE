import styled from "@emotion/styled";
import { FormInstance } from "antd";
import { ComponentType, ReactNode, CSSProperties } from "react";
import { default as FormCustom } from "./form";

const StyledForm = styled(FormCustom)``;

export interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

export interface FormProps {
  form?: FormInstance;
  component?: ComponentType | boolean | any;
  children?: ReactNode;
  name?: string;
  labelCol?: object;
  wrapperCol?: object;
  style?: CSSProperties;
  initialValues?: object;
  onFinish?: (values: any) => void;
  onFinishFailed?: (props: any) => void;
  autoComplete?: string;
  layout?: "horizontal" | "vertical" | "inline";
  fields?: FieldData[];
}

export function Form({
  form,
  component,
  children,
  autoComplete,
  initialValues,
  labelCol,
  name,
  onFinish,
  onFinishFailed,
  style,
  wrapperCol,
  layout = "horizontal",
  fields,
}: FormProps) {
  const passProps = {
    form,
    component,
    autoComplete,
    initialValues,
    labelCol,
    name,
    onFinish,
    onFinishFailed,
    style,
    wrapperCol,
    layout,
    fields,
  };
  return <StyledForm {...passProps}>{children}</StyledForm>;
}

export default Form;

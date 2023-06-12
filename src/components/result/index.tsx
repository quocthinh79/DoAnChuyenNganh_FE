import styled from "@emotion/styled";
import { ReactNode } from "react";
import { EResultStatus } from "../../core";
import { default as ResultCustom } from "./result";

const StyledResult = styled(ResultCustom)``;

export interface ResultProps {
  extra?: ReactNode;
  icon?: ReactNode;
  status?: EResultStatus;
  subTitle?: string;
  title?: string;
}

export function Result({
  extra,
  icon,
  status = EResultStatus.Info,
  subTitle,
  title,
}: ResultProps) {
  const passProps = { extra, icon, subTitle, title, status };
  return <StyledResult {...passProps} />;
}

export default Result;

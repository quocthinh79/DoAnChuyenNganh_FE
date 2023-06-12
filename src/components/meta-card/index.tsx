import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { default as MetaCardCustom } from "./meta-card";

const StyledMetaCard = styled(MetaCardCustom)``;

export interface MetaCardProps {
  avatar?: ReactNode;
  className?: string;
  description?: ReactNode;
  style?: CSSProperties;
  title?: ReactNode;
}

export function MetaCard({
  avatar,
  className,
  description,
  style,
  title,
}: MetaCardProps) {
  const passProps = { avatar, className, description, style, title };
  return <StyledMetaCard {...passProps} />;
}

export default MetaCard;

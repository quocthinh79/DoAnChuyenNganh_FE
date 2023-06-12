import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as ImageCustom } from "./image";

const StyledImage = styled(ImageCustom)`
  object-fit: cover;
`;

export interface ImageProps {
  alt?: string;
  fallback?: string;
  height?: string | number;
  placeholder?: ReactNode;
  preview?: boolean;
  src?: string;
  width?: string | number;
  onError?: (event: any) => void;
  rootClassName?: string;
}

export function Image({
  alt = "",
  fallback,
  height,
  onError,
  placeholder,
  preview,
  rootClassName,
  src,
  width = "100%",
}: ImageProps) {
  const passProps = {
    alt,
    fallback,
    height,
    onError,
    placeholder,
    preview,
    rootClassName,
    src,
    width,
  };
  return <StyledImage loading="lazy" {...passProps} />;
}

export default Image;

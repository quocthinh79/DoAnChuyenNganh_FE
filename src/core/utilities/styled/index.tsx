import { css as cssEmotionCss } from "@emotion/css";

export type As<Props = any> = React.ElementType<Props>;

export const templateStringToClassName = () => {
  return cssEmotionCss;
};

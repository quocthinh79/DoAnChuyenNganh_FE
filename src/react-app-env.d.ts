import "@emotion/react";
import { ITheme } from "./core/types";
// import { ITheme } from "./core/types/interfaces/ITheme";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}

import { EOrderTags } from "../../enums";

export interface IOrderTags {
  [EOrderTags.Brand]?: string;
  [EOrderTags.CPU]?: string;
  [EOrderTags.Types]?: string;
}

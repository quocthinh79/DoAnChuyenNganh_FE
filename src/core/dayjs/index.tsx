import type { Dayjs } from "dayjs";
import { FORMAT_DATE_DEFAULT } from "@constant";
import dayjs from "dayjs";

export type DayjsType = dayjs.Dayjs;

export const currentDay = dayjs(dayjs(), FORMAT_DATE_DEFAULT);

type Generic = string;
type GenericFn = (value: Dayjs) => string;

export type FormatType = Generic | GenericFn | Array<Generic | GenericFn>;

export { dayjs };

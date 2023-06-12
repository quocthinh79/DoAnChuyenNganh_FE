import { OptionsSelect } from "@components";

export const arrayToString = (arr: string[]) => {
  return arr.join(", ");
};

export const sumValueArray = (arr: number[]) => {
  return arr?.reduce((pre, current) => pre + current, 0);
};

export const convertArrayToOptionsSelect = (arr: string[]): OptionsSelect[] => {
  return arr.map((city) => {
    return {
      value: city,
      label: city,
    };
  });
};

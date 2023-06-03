import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { handleSpecialSymbol } from "../../core/utilities/navigation/search-params";
import { IOrderTags } from "@core";

export type SelectedTagsProps = { [label: string]: string[] };

export interface UseSelectedTag {
  allSearchParams: IOrderTags;
  selectedTags: SelectedTagsProps;
  handleChange: (label: string, tag: string, checked: boolean) => void;
}

export function useSelectedTag(): UseSelectedTag {
  const selected: SelectedTagsProps = {};
  const [selectedTags, setSelectedTags] = useState<SelectedTagsProps>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const url = new URL(window.location.href);
  const currentSearchParams = url.searchParams;

  useEffect(() => {
    Array.from(currentSearchParams).map((item) => {
      selected[item[0]] = item[1].split(",");
    });
    setSelectedTags(selected);
  }, [window.location.href]);

  const handleChange = (label: string, tag: string, checked: boolean) => {
    if (checked) {
      selected[label] = [
        ...(selectedTags[label] || []),
        handleSpecialSymbol(tag),
      ];
    } else {
      selected[label] = [
        ...(selectedTags[label]?.filter(
          (item) => item !== handleSpecialSymbol(tag)
        ) || []),
      ];
    }
    Object.entries(selected).map((item, index) => {
      if (item[1].length === 0) {
        searchParams.delete(item[0]);
      } else {
        searchParams.set(item[0], item[1].join(","));
      }
    });
    setSearchParams(searchParams);
    setSelectedTags({ ...selectedTags, ...selected });
  };

  const allSearchParams = Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => [key, value])
  );

  return {
    allSearchParams,
    selectedTags,
    handleChange,
  };
}

export default useSelectedTag;

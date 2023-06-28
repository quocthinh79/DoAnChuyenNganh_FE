import { CheckableTag, Flex } from "../../components";
import { EWrapFlex } from "../../core";
import { handleSpecialSymbol } from "../../core/utilities/navigation/search-params";
import { SelectedTagsProps } from "../../hooks";

export interface SiderItemProps {
  label: string;
  children?: string[];
  selectedTags: SelectedTagsProps;
  handleChange: any;
}

export function SiderItem({
  selectedTags,
  handleChange,
  label,
  children = [],
}: SiderItemProps) {
  return (
    <Flex wrap={EWrapFlex.Wrap} gap={10}>
      {children?.map((tag, index) => (
        <CheckableTag
          key={tag}
          checked={selectedTags?.[label]?.includes(handleSpecialSymbol(tag))}
          onChange={(checked) => handleChange(label, tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Flex>
  );
}

export default SiderItem;

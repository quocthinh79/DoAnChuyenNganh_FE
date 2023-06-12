import styled from "@emotion/styled";
import { default as SliderRangeCustom } from "./slider-range";
import { noop } from "@constant";

interface SliderRange {
  draggableTrack?: boolean;
}

export interface SliderRangeProps {
  defaultValue?: [number, number];
  max?: number;
  min?: number;
  range: true | SliderRange;
  step?: number | null;
  value?: [number, number];
  onChange?: (value: [number, number]) => void;
  onAfterChange?: (value: [number, number]) => void;
}

const StyledSliderRange = styled(SliderRangeCustom)``;

export function SliderRange({
  defaultValue,
  max = 100,
  min = 0,
  range,
  step = 1,
  value,
  onChange = noop,
  onAfterChange = noop,
}: SliderRangeProps) {
  const passProps = {
    min,
    max,
    step,
    value,
    defaultValue,
    range,
    onChange,
    onAfterChange,
  };
  return <StyledSliderRange {...passProps} />;
}

export default SliderRange;

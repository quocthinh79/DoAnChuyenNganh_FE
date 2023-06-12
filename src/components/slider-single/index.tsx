import styled from "@emotion/styled";
import { default as SliderSingleCustom } from "./slider-single";
import { noop } from "@constant";

export interface SliderSingleProps {
  defaultValue?: number;
  max?: number;
  min?: number;
  range?: false;
  step?: number | null;
  value?: number;
  onChange?: (value: number) => void;
  onAfterChange?: (value: number) => void;
}

const StyledSliderSingle = styled(SliderSingleCustom)``;

export function SliderSingle({
  defaultValue,
  max = 100,
  min = 0,
  range,
  step = 1,
  value,
  onChange = noop,
  onAfterChange = noop,
}: SliderSingleProps) {
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
  return <StyledSliderSingle {...passProps} />;
}

export default SliderSingle;

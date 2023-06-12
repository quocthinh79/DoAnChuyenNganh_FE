import { noop } from "@constant";
import { DayjsType, EDatePicker, FormatType } from "@core";
import styled from "@emotion/styled";
import { default as DatePickerCustom } from "./date-picker";

export interface DatePickerProps {
  defaultPickerValue?: DayjsType;
  defaultValue?: DayjsType;
  onChange?: (date: DayjsType | null, dateString: string) => void;
  picker?: EDatePicker;
  format?: FormatType;
  block?: boolean;
  value?: DayjsType;
}

const StyledDatePicker = styled(DatePickerCustom)``;

export function DatePicker({
  defaultPickerValue,
  defaultValue,
  onChange,
  picker = EDatePicker.Date,
  block = false,
  value,
}: DatePickerProps) {
  const passProps = {
    defaultPickerValue,
    defaultValue,
    onChange,
    picker,
    value,
  };

  return (
    <StyledDatePicker
      style={{ width: `${block ? "100%" : "auto"}` }}
      {...passProps}
    />
  );
}

export default DatePicker;

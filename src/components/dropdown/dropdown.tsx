import { Key, ReactNode } from "react";

import { default as AntdDropdown } from "antd/es/dropdown";
import styled from "@emotion/styled";
import { noarr } from "@constant";
import { EDropdownPosition } from "@core";

export interface ItemProps {
  danger?: boolean;
  disabled?: boolean;
  itemIcon?: ReactNode;
  key: Key;
  label?: string | ReactNode;
  onClick?(): void;
}

export interface DropdownProps {
  arrow?: boolean;
  disabled?: boolean;
  items?: ItemProps[];
  open?: boolean;
  placement?: EDropdownPosition;
  children?: ReactNode;
  className?: string;
}

const StyledDropdown = styled(AntdDropdown)``;

export function Dropdown({
  arrow = false,
  children = null,
  disabled = false,
  items = noarr,
  open = false,
  placement = EDropdownPosition.BottomLeft,
  className,
}: DropdownProps) {
  const passProps = { arrow, disabled, open, placement, className };

  return (
    <StyledDropdown
      {...passProps}
      menu={{ items }}
      trigger={["click", "hover"]}
    >
      {children}
    </StyledDropdown>
  );
}

export default Dropdown;

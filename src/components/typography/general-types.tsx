import { MouseEvent, ReactNode } from "react";

export interface Copyable {
  format?: "text/plain" | "text/html";
  icon?: [ReactNode, ReactNode];
  text?: string;
  tooltips?: [ReactNode, ReactNode];
  onCopy?: (event?: MouseEvent<HTMLDivElement>) => void;
}

export interface Editable {
  autoSize?: boolean | { minRows: number; maxRows: number };
  editing?: boolean;
  icon?: ReactNode;
  maxLength?: number;
  tooltip?: boolean | ReactNode;
  text?: string;
  onChange?: (value: string) => void;
  onCancel?: () => void;
  onStart?: () => void;
  onEnd?: () => void;
  // triggerType?: ReactNode[] | string[]; // TODO: Missing prop
  enterIcon?: ReactNode;
}

export interface Ellipsis {
  expandable?: boolean;
  rows?: number;
  suffix?: string;
  symbol?: ReactNode;
  tooltip?: boolean | ReactNode; // TODO: Missing prop
  onEllipsis?: (ellipsis: any) => void; // TODO: any prop
  onExpand?: (event: any) => void; // TODO: any prop
}

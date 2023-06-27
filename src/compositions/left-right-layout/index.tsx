import { Row, Col, Space, SizeProps } from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import React, { ReactNode } from "react";

export interface LeftRightLayoutProps {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
}

export function LeftRightLayout({
  leftChildren,
  rightChildren,
}: LeftRightLayoutProps) {
  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      <Col span={16}>{leftChildren}</Col>
      <Col span={8}>{rightChildren}</Col>
    </Row>
  );
}

export default LeftRightLayout;

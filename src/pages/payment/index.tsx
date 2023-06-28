import {
  LeftContentCheckout,
  LeftRightLayout,
  RightContentCheckout,
} from "@compositions";
import { useForm } from "antd/es/form/Form";
import React from "react";

export function CheckoutPage() {
  const [form] = useForm();

  return (
    <LeftRightLayout
      leftChildren={<LeftContentCheckout form={form} />}
      rightChildren={<RightContentCheckout form={form} />}
    />
  );
}

export default CheckoutPage;

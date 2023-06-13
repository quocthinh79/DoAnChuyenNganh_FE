import { FormItem, InputPassword, InputText, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import { memo } from "react";

export function LoginFormItem() {
  return (
    <Space widthFull>
      <FormItem
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
      >
        <InputText />
      </FormItem>
      <FormItem
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
      >
        <InputPassword />
      </FormItem>
    </Space>
  );
}

export default memo(LoginFormItem);

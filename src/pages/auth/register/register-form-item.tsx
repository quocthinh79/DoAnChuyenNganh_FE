import { FormItem, InputPassword, InputText, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";

export function RegisterFormItem() {
  return (
    <Space widthFull>
      <FormItem
        label="Email"
        name="email"
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
      <FormItem
        label="Re-Password"
        name="rePassword"
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

export default RegisterFormItem;

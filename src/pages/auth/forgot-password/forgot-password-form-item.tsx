import { FormItem, InputPassword, InputText, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";

export function ForgotPasswordFormItem() {
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
    </Space>
  );
}

export default ForgotPasswordFormItem;

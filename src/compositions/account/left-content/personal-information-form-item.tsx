import {
  DatePicker,
  InputText,
  Radio,
  RadioGroup,
  SizeProps,
  Space,
} from "@components";
import { EMPTY_INPUT_ERROR, FORMAT_DATE_DEFAULT } from "@constant";
import { EDirectionType } from "@core";
import { Form } from "antd";

export function PersonalInformationForm() {
  return (
    <Space
      size={SizeProps.Middle}
      direction={EDirectionType.Vertical}
      widthFull
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="fullName"
        label="Họ tên"
        // valuePropName="value"
      >
        <InputText placeholder="Nhập họ và tên" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="phone"
        label="Số điện thoại"
      >
        <InputText placeholder="Nhập số điện thoại" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="email"
        label="Email"
      >
        <InputText placeholder="Nhập email của bạn" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="dob"
        label="Ngày sinh"
      >
        <DatePicker block format={FORMAT_DATE_DEFAULT} />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: EMPTY_INPUT_ERROR,
          },
        ]}
        name="sex"
        label="Giới tính"
      >
        <RadioGroup name="sex">
          <Radio value="Nam">Nam</Radio>
          <Radio value="Nữ">Nữ</Radio>
        </RadioGroup>
      </Form.Item>
    </Space>
  );
}

export default PersonalInformationForm;

import { InputText, Modal, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import {
  EAdminModalEditLaptop,
  EAdminModalLaptop,
  EModalWidth,
  apiUpdateLaptop,
} from "@core";
import { useMutation } from "@tanstack/react-query";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";

export interface EditModalLaptopProps {
  openModal: boolean;
  closeModal: () => void;
  id: number;
  data: any[];
}

export function EditModalLaptop({
  openModal,
  closeModal,
  id,
  data,
}: EditModalLaptopProps) {
  const _data = Object.entries(EAdminModalLaptop).map(([key]) => ({
    [key]: data?.find((item: any) => item?.id === id)?.[key],
  }));

  const [form] = useForm();

  const {
    mutate: updateLaptop,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["apiUpdateImageLaptop", "admin", id],
    mutationFn: apiUpdateLaptop,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      closeModal?.();
    },
  });

  const onFinish = async (value: any) => {
    console.log(value);
    await updateLaptop({ id, ...value });
  };

  const handleSubmit = () => {
    form.submit();
  };

  useEffect(() => {
    form.setFieldsValue(Object.assign({}, ..._data));
  }, [id]);

  return (
    <Modal
      onOk={handleSubmit}
      width={EModalWidth.Small}
      onCancel={closeModal}
      open={openModal}
      closable={false}
      cancelText="Hủy"
      okText="Chỉnh sửa"
      title="Chỉnh sửa"
      confirmLoading={isLoading}
    >
      <Form encType="multipart/form-data" form={form} onFinish={onFinish}>
        <Space widthFull>
          {Object.entries(EAdminModalEditLaptop).map(([key, value], index) => {
            return (
              <Form.Item
                rules={[{ required: true, message: EMPTY_INPUT_ERROR }]}
                labelCol={{ span: 5 }}
                key={key}
                name={key}
                label={value}
              >
                {Object.keys(EAdminModalEditLaptop).includes(key) ? (
                  <InputText placeholder={`Vui lòng nhập trường ${value}`} />
                ) : (
                  <></>
                )}
              </Form.Item>
            );
          })}
        </Space>
      </Form>
    </Modal>
  );
}

export default EditModalLaptop;

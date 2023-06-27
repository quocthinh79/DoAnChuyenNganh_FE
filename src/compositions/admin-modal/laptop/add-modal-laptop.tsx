import { InputText, Modal, Space } from "@components";
import { UploadMultipleFile, UploadSingleFile } from "@compositions";
import { EMPTY_INPUT_ERROR } from "@constant";
import {
  EAdminModalLaptop,
  EImageEntity,
  EModalWidth,
  apiAddLaptop,
} from "@core";
import { useMutation } from "@tanstack/react-query";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";

export interface AddModalLaptopProps {
  openModal: boolean;
  closeModal: () => void;
}

export function AddModalLaptop({ openModal, closeModal }: AddModalLaptopProps) {
  const [form] = useForm();

  const {
    mutate: addLaptop,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["apiAddLaptop"],
    mutationFn: apiAddLaptop,
    onSuccess: (data) => {
      closeModal?.();
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  const onFinish = async (value: any) => {
    await addLaptop(value);
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <Modal
      onOk={handleSubmit}
      width={EModalWidth.Small}
      onCancel={closeModal}
      open={openModal}
      closable={false}
      cancelText="Hủy"
      okText="Thêm mới"
      title="Thêm mới"
      confirmLoading={isLoading}
    >
      <Form encType="multipart/form-data" form={form} onFinish={onFinish}>
        <Space widthFull>
          {Object.entries(EAdminModalLaptop).map(([key, value], index) => {
            return (
              <Form.Item
                rules={[{ required: true, message: EMPTY_INPUT_ERROR }]}
                labelCol={{ span: 5 }}
                key={key}
                name={key}
                label={value}
              >
                {Object.keys(EImageEntity).includes(key) ? (
                  `${value}` === `${EImageEntity.imageFiles}` ? (
                    <UploadMultipleFile form={form} name={key} />
                  ) : (
                    <UploadSingleFile form={form} name={key} />
                  )
                ) : (
                  <InputText placeholder={`Vui lòng nhập trường ${value}`} />
                )}
              </Form.Item>
            );
          })}
        </Space>
      </Form>
    </Modal>
  );
}

export default AddModalLaptop;

import { InputText, Modal, Space } from "@components";
import { EMPTY_INPUT_ERROR } from "@constant";
import {
  EAdminModalAccount,
  EModalWidth,
  apiUpdateAccountInAdmin,
} from "@core";
import { useStorageToken } from "@store";
import { useMutation } from "@tanstack/react-query";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";

export interface EditModalAccountProps {
  openModal: boolean;
  closeModal: () => void;
  id: number;
  data: any[];
}

export function EditModalAccount({
  closeModal,
  data,
  id,
  openModal,
}: EditModalAccountProps) {
  const _data = Object.entries(EAdminModalAccount).map(([key]) => ({
    [key]: data?.find((item: any) => item?.id === id)?.[key],
  }));

  const [form] = useForm();
  const { token } = useStorageToken();

  const { mutate: updateAccount, isLoading } = useMutation({
    mutationKey: ["apiUpdateAccountInAdmin", "admin", id],
    mutationFn: apiUpdateAccountInAdmin,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      closeModal?.();
    },
  });

  const onFinish = async (value: any) => {
    console.log(value);
    await updateAccount({ token, id, ...value });
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
          {Object.entries(EAdminModalAccount).map(([key, value], index) => {
            return (
              <Form.Item
                labelCol={{ span: 5 }}
                key={key}
                name={key}
                label={value}
              >
                {Object.keys(EAdminModalAccount).includes(key) ? (
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

export default EditModalAccount;

import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button, PopConfirm } from "@components";
import {
  EAdminAccountColumnShow,
  EButtonTypes,
  ITypeDataTable,
  apiDeleteAccount,
  apiGetMultipleAccounts,
} from "@core";
import { useDisclosure } from "@hooks";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Form, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";
import { IDeleteAccountReq } from "src/core/types/interfaces/request/IDeleteAccountReq";
import AddModalAccount from "../../admin-modal/account/add-modal-account";
import EditModalAccount from "../../admin-modal/account/edit-modal-account";

export function TableAccount() {
  const { data, refetch } = useQuery({
    queryKey: ["apiGetMultipleAccounts"],
    queryFn: () => apiGetMultipleAccounts(),
    onSuccess(data) {
      console.log("🚀 ~ file: index.tsx:15 ~ onSuccess ~ data:", data);
    },
  });

  const [form] = useForm();
  const [idModal, setIdModal] = useState<number>(0);

  const {
    onClose: onCloseAddModal,
    onOpen: onOpenAddModal,
    open: openAddModal,
  } = useDisclosure({
    initialState: false,
    refetch,
  });

  const {
    onClose: onCloseEditModal,
    onOpen: onOpenEditModal,
    open: openEditModal,
  } = useDisclosure({
    initialState: false,
    refetch,
  });

  const handleOpenModalClick = (id: number) => {
    setIdModal(id);
    onOpenEditModal();
  };

  const ModalAdd = useMemo(() => {
    return (
      <AddModalAccount openModal={openAddModal} closeModal={onCloseAddModal} />
    );
  }, [openAddModal]);

  const ModalEdit = useMemo(() => {
    return (
      <EditModalAccount
        id={idModal}
        data={data}
        closeModal={onCloseEditModal}
        openModal={openEditModal}
      />
    );
  }, [idModal, openEditModal]);

  const _columnName: ColumnsType<ITypeDataTable> = Object.entries(
    EAdminAccountColumnShow
  ).map(([key, value]) => {
    return {
      title: value,
      dataIndex: key,
      width: 200,
      ellipsis: true,
    };
  });

  const { mutate: deleteAccount } = useMutation({
    mutationKey: ["deleteAccount"],
    mutationFn: apiDeleteAccount,
    onSuccess(data, variables, context) {
      console.log(
        "🚀 ~ file: table-account.tsx:79 ~ TableAccount ~ data:",
        data
      );
    },
    onError(error, variables, context) {
      console.log(
        "🚀 ~ file: table-account.tsx:82 ~ TableAccount ~ error:",
        error
      );
    },
  });

  const submitDeleteAccount = async ({ id }: IDeleteAccountReq) => {
    await deleteAccount({ id });
  };

  const defaultColumns: ColumnsType<ITypeDataTable> = [
    ..._columnName,
    {
      title: "Action",
      dataIndex: "Action",
      fixed: "right",
      width: 250,
      render: (_, record) => {
        return data.length >= 1 ? (
          <>
            <Button onClick={() => handleOpenModalClick(record.id)}>
              <EditFilled />
            </Button>
            <PopConfirm
              title="Bạn chắc chứ?"
              cancelText="Hủy"
              okText="Xóa"
              onConfirm={() => submitDeleteAccount({ id: record.id })}
            >
              <Button type={EButtonTypes.Primary} danger>
                <DeleteFilled />
              </Button>
            </PopConfirm>
          </>
        ) : (
          <></>
        );
      },
    },
  ];

  return (
    <>
      <>
        {ModalAdd}
        {ModalEdit}
        <Button
          onClick={onOpenAddModal}
          type={EButtonTypes.Primary}
          icon={<PlusOutlined />}
        />
        <Form form={form}>
          <Table
            bordered
            dataSource={data}
            columns={defaultColumns}
            scroll={{ x: 1500, y: 300 }}
          />
        </Form>
      </>
    </>
  );
}

export default TableAccount;

import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button, PopConfirm } from "@components";
import {
  EAdminLaptopColumnShow,
  EButtonTypes,
  IDeleteLaptopReq,
  ITypeDataTable,
  apiDeleteLaptop,
  apiGetMultipleLaptop,
} from "@core";
import { useDisclosure } from "@hooks";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Form, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";
import AddModalLaptop from "../../admin-modal/laptop/add-modal-laptop";
import EditModalLaptop from "../../admin-modal/laptop/edit-modal-laptop";

export function TableLaptop() {
  const [tableParams, setTableParams] = useState({
    current: 1,
    pageSize: 10,
  });
  const { data, refetch } = useQuery({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryKey: ["apiGetLaptop", tableParams.current],
    queryFn: () =>
      apiGetMultipleLaptop({
        start: tableParams.current,
        limit: tableParams.pageSize,
      }),
    onSuccess: (data) => {},
    onError: (error: any) => {
      console.log(error);
    },
  });

  const [form] = useForm();

  const { mutate: deleteLaptop } = useMutation({
    mutationKey: ["deleteLaptop"],
    mutationFn: apiDeleteLaptop,
    onSuccess(data, variables, context) {
      refetch();
    },
    onError(error, variables, context) {},
  });

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

  const _columnName: ColumnsType<ITypeDataTable> = Object.entries(
    EAdminLaptopColumnShow
  ).map(([key, value]) => {
    return {
      title: value,
      dataIndex: key,
      width: 200,
      ellipsis: true,
    };
  });

  const submitDeleteLaptop = async ({ ids }: IDeleteLaptopReq) => {
    await deleteLaptop({ ids });
  };

  const defaultColumns: ColumnsType<ITypeDataTable> = [
    ..._columnName,
    {
      title: "Action",
      dataIndex: "Action",
      fixed: "right",
      width: 250,
      render: (_, record) => {
        return data?.laptopList.length >= 1 ? (
          <>
            <Button onClick={() => handleOpenModalClick(record.id)}>
              <EditFilled />
            </Button>
            <PopConfirm
              title="Bạn chắc chứ?"
              cancelText="Hủy"
              okText="Xóa"
              onConfirm={() => submitDeleteLaptop({ ids: [record.id] })}
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

  const [idModal, setIdModal] = useState<number>(0);

  const handleOpenModalClick = (id: number) => {
    setIdModal(id);
    onOpenEditModal();
  };

  const ModalAdd = useMemo(() => {
    return (
      <AddModalLaptop openModal={openAddModal} closeModal={onCloseAddModal} />
    );
  }, [openAddModal]);

  const ModalEdit = useMemo(() => {
    return (
      <EditModalLaptop
        id={idModal}
        data={data?.laptopList}
        closeModal={onCloseEditModal}
        openModal={openEditModal}
      />
    );
  }, [idModal, openEditModal]);

  const handleTableChange = ({ current, pageSize, total }: any) => {
    setTableParams({ current, pageSize });
    // console.log(values);
  };

  return (
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
          dataSource={data?.laptopList}
          columns={defaultColumns}
          scroll={{ x: 1500, y: 300 }}
          pagination={{
            pageSize: tableParams.pageSize,
            total: data?.totalPage * tableParams.pageSize,
            current: tableParams.current,
          }}
          onChange={handleTableChange}
        />
      </Form>
    </>
  );
}

export default TableLaptop;

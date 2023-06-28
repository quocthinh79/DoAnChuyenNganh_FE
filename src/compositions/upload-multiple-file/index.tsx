import { UploadOutlined } from "@ant-design/icons";
import { Button } from "@components";
import { FormInstance, Upload, UploadFile } from "antd";
import { useEffect, useState } from "react";

export interface UploadMultipleFileProps {
  form: FormInstance<any>;
  name: string;
  value?: UploadFile<any>[];
}

export function UploadMultipleFile({
  form,
  name,
  value: defaultFileList = [],
}: UploadMultipleFileProps) {
  const [fileListState, setFileListState] =
    useState<UploadFile[]>(defaultFileList);

  // useEffect(() => {
  //   setFileListState(defaultFileList);
  // }, [defaultFileList]);

  const handleRemove = (file: UploadFile) => {
    const index = fileListState.indexOf(file);
    const newFileList = [...fileListState];
    newFileList.splice(index, 1);
    setFileListState(newFileList);
  };

  const handleUpload = (file: any) => {
    setFileListState((pre) => [...pre, file]);
    return false;
  };

  useEffect(() => {
    form.setFieldValue(name, fileListState);
  }, [fileListState]);

  return (
    <Upload
      // defaultFileList={defaultFileList}
      accept=".png,.jpg,.jpeg,.webp"
      multiple={true}
      fileList={defaultFileList || fileListState}
      beforeUpload={handleUpload}
      onRemove={handleRemove}
    >
      <Button icon={<UploadOutlined />}>Select Multiple File</Button>
    </Upload>
  );
}

export default UploadMultipleFile;

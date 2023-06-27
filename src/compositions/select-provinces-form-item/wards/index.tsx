import { Button, SizeProps, Space } from "@components";

export interface WardsProps {
  wardsList: string[];
  setWardSelected: (city: string) => void;
  onCloseModal: () => void;
}

export function Wards({
  setWardSelected,
  wardsList,
  onCloseModal,
}: WardsProps) {
  return (
    <>
      <Space widthFull size={SizeProps.Middle}>
        {wardsList.map((ward, index) => {
          return (
            <Button
              onClick={() => {
                setWardSelected(ward);
                onCloseModal();
              }}
              block
              key={`${ward}${index}`}
            >
              {ward}
            </Button>
          );
        })}
      </Space>
    </>
  );
}

export default Wards;

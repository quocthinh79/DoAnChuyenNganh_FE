import { Button, SizeProps, Space } from "@components";

export interface DistrictsProps {
  districtsList: string[];
  setDistrictSelected: (city: string) => void;
}

export function Districts({
  districtsList,
  setDistrictSelected,
}: DistrictsProps) {
  return (
    <>
      <Space widthFull size={SizeProps.Middle}>
        {districtsList.map((district, index) => {
          return (
            <Button
              onClick={() => setDistrictSelected(district)}
              block
              key={`${district}${index}`}
            >
              {district}
            </Button>
          );
        })}
      </Space>
    </>
  );
}

export default Districts;

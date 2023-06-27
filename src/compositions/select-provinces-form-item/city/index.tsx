import { Button, SizeProps, Space } from "@components";

export interface CityProps {
  cityList: string[];
  setCitySelected: (city: string) => void;
}

export function City({ cityList, setCitySelected }: CityProps) {
  return (
    <Space widthFull size={SizeProps.Middle}>
      {cityList.map((city, index) => {
        return (
          <Button
            onClick={() => setCitySelected(city)}
            block
            key={`${city}${index}`}
          >
            {city}
          </Button>
        );
      })}
    </Space>
  );
}

export default City;

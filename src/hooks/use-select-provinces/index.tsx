import { EProvinces, Provinces, apiProvinces } from "@core";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

export interface stateUseSelectProvinces {
  cityList: string[];
  citySelect: string;

  districts: string[];
  districtSelect: string;

  wards: string[];
  wardSelect: string;
}

export interface currentDataSelect {
  typeSelect: EProvinces;
  dataRender: string[];
}

export interface useSelectProvincesProps {}
export interface useSelectProvinces {
  dataRender: currentDataSelect;
  cityList: string[];
  districtsList: string[];
  wardsList: string[];
  resultAddress: string;
  setCitySelected: (city: string) => void;
  setDistrictsSelected: (district: string) => void;
  setWardSelected: (ward: string) => void;
  setDataRender: Dispatch<SetStateAction<currentDataSelect>>;
}

export function useSelectProvinces(
  props?: useSelectProvincesProps
): useSelectProvinces {
  const [stateSelect, setStateSelect] = useState<stateUseSelectProvinces>({
    cityList: [],
    citySelect: "",
    districts: [],
    districtSelect: "",
    wards: [],
    wardSelect: "",
  });

  const [resultAddress, setResultAddress] = useState<string>("");

  const [dataRender, setDataRender] = useState<currentDataSelect>({
    typeSelect: EProvinces.City,
    dataRender: [],
  });

  const { data } = useQuery<Provinces[]>({
    refetchOnWindowFocus: false,
    queryKey: ["apiProvinces"],
    queryFn: () => apiProvinces(),
    onSuccess(data) {
      const initialData = data.map((province) => province.name);
      setStateSelect({
        ...stateSelect,
        cityList: initialData,
      });
      setDataRender({
        typeSelect: EProvinces.City,
        dataRender: initialData,
      });
    },
  });

  const setCitySelected = (city: string) => {
    setStateSelect({
      ...stateSelect,
      citySelect: city,
    });
    districtsInCitySelected(city);
  };

  const districtsInCitySelected = (city: string) => {
    const districts = data
      ?.find((province) => province.name === city)
      ?.districts.map((district) => district.name);

    setStateSelect({
      ...stateSelect,
      districts: districts || [],
      citySelect: city,
    });

    setDataRender({
      typeSelect: EProvinces.District,
      dataRender: districts || [],
    });
  };

  const setDistrictsSelected = (district: string) => {
    setStateSelect({
      ...stateSelect,
      districtSelect: district,
    });

    wardsInDistrictsSelected(district);
  };

  const wardsInDistrictsSelected = (district: string) => {
    const wards = data
      ?.find((province) => province.name === stateSelect.citySelect)
      ?.districts.find((districtItem) => districtItem.name === district)
      ?.wards.map((ward) => ward.name);

    setStateSelect({
      ...stateSelect,
      wards: wards || [],
      districtSelect: district,
    });

    setDataRender({
      typeSelect: EProvinces.Ward,
      dataRender: wards || [],
    });
  };

  const setWardSelected = (ward: string) => {
    setStateSelect({
      ...stateSelect,
      wardSelect: ward,
    });

    setResultAddress(
      `${ward}, ${stateSelect.districtSelect}, ${stateSelect.citySelect}`
    );
  };

  return {
    cityList: data?.map((province) => province.name) || [],
    districtsList: stateSelect.districts || [],
    wardsList: stateSelect.wards || [],
    dataRender,
    resultAddress,
    setCitySelected,
    setDistrictsSelected,
    setWardSelected,
    setDataRender,
  };
}

export default useSelectProvinces;

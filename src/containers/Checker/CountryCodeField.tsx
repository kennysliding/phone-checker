import { useEffect } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

import areaList from "@/constants/area-list.json";
import useGeoLocation from "@/hooks/useGeoLocation";

import { FormValues } from "./index";

type CountryCodeFieldProps = {
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
};

function CountryCodeField({ register, setValue }: CountryCodeFieldProps) {
  useEffect(() => {
    const { area } = useGeoLocation();
    const defaultCode = areaList.find((item) => item.name === area)?.dial_code!;
    setValue("countryCode", defaultCode);
  }, []);

  return (
    <div className="w-20">
      <input
        className="w-full"
        {...register("countryCode")}
        list="country-code"
      />
      <datalist id="country-code">
        {areaList.map((item) => (
          <option key={item.code} value={item.dial_code}>
            {item.name}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default CountryCodeField;

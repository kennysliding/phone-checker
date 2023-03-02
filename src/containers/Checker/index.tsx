import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { useMutation } from "@tanstack/react-query";

import Indicator from "@/components/Indicator.component";
import useOnKeyPress from "@/hooks/useOnKeyPress";
import { twillioAPI } from "@/providers/axios.provider";
import { appendHistory } from "@/reducers/history.reducer";

import CountryCodeField from "./CountryCodeField";
import PhoneNumberField from "./PhoneNumberField";

type FormValues = {
  countryCode: string;
  phoneNumber: string;
};

function CheckerContainer() {
  const { handleSubmit, register, setValue, getValues } = useForm<FormValues>();

  const dispatch = useDispatch();

  const checker = useMutation({
    mutationFn: async ({
      countryCode,
      phoneNumber,
    }: FormValues): Promise<boolean> => {
      const formattedPhoneNumber = `${countryCode}${phoneNumber}`;
      const res = await twillioAPI.get("/PhoneNumbers/" + formattedPhoneNumber);
      return res.data.valid;
    },
    onSettled: (data, error, variables, context) => {
      // alert(data ? "The phone number is valid" : "The phone number is invalid");
      if (error) return;
      dispatch(appendHistory({ ...variables, isValid: data! }));
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => checker.mutate(data);

  const hotkeyEvent = useOnKeyPress(handleSubmit(onSubmit), "Enter");

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit(onSubmit)} onChange={() => checker.reset()}>
        <span className="flex gap-2 justify-center">
          <CountryCodeField register={register} setValue={setValue} />
          <PhoneNumberField
            register={register}
            setValue={setValue}
            getValues={getValues}
          />
          <Indicator display={checker.isSuccess} isSuccess={checker.data} />
        </span>
        {!checker.isLoading && <input type="submit" />}
        {checker.isLoading && <div>loading...</div>}
      </form>
    </div>
  );
}

export type { FormValues };
export default CheckerContainer;

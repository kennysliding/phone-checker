import { useState } from "react";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import NumberPad from "@/components/NumberPad.component";

import { FormValues } from "./index";

type PhoneNumberFieldProps = {
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  getValues: UseFormGetValues<FormValues>;
};

function PhoneNumberField({
  register,
  setValue,
  getValues,
}: PhoneNumberFieldProps) {
  const [showNumberPad, setShowNumberPad] = useState(false);

  const onNumberPadBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setShowNumberPad(false);
    }
  };

  return (
    <div onFocus={() => setShowNumberPad(true)} onBlur={onNumberPadBlur}>
      <input type="tel" {...register("phoneNumber")} />
      {showNumberPad && (
        <NumberPad
          inputFunc={(number) => {
            setValue("phoneNumber", getValues("phoneNumber") + number);
          }}
          cancelFunc={() => {
            setValue("phoneNumber", getValues("phoneNumber").slice(0, -1));
          }}
        />
      )}
    </div>
  );
}

export default PhoneNumberField;

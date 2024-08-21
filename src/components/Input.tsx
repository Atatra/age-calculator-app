import { KeyboardEvent, useState } from "react";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  topLabel: string;
  minValue: number;
  maxValue: number;
}
const Input = ({
  id,
  name,
  placeholder,
  topLabel,
  minValue,
  maxValue,
}: Props) => {
  const handleKeyDown = ({ target, code }: KeyboardEvent<HTMLInputElement>) => {
    const value = (target as HTMLInputElement).value;
    if (code === "ArrowLeft" && (value === "" || value === "0")) {
      (target as HTMLInputElement).value = "0";
    } else if (code === "ArrowRight" && (value === "" || value === "0"))
      (target as HTMLInputElement).value = maxValue.toString();
  };

  return (
    <div className="flex flex-col max-w-[75px] sm:min-w-[125px]">
      <label
        htmlFor="day"
        className="tracking-[0.2em] text-[0.6rem]/[1rem] sm:text-xs
        text-neutral-sGrey font-bold pb-1"
      >
        {topLabel}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        id={id}
        name={name}
        min={minValue}
        max={maxValue}
        className="border-2 rounded-sm text-[1rem] sm:text-inputs
        font-bold pl-[0.85rem] py-2 outline-primary-purple"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;

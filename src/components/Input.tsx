import { ChangeEvent, KeyboardEvent, useState } from "react";

interface Props {
  id: string;
  name: string;
  placeholder: string;
  topLabel: string;
  minValue: number;
  maxValue: number;
  error: string | null;
}
const Input = ({
  id,
  name,
  placeholder,
  topLabel,
  minValue,
  maxValue,
  error,
}: Props) => {
  const handleKeyDown = ({ target, code }: KeyboardEvent<HTMLInputElement>) => {
    const value = (target as HTMLInputElement).value;
    if (code === "ArrowLeft" && value === "") {
      (target as HTMLInputElement).value = minValue.toString();
    } else if (code === "ArrowRight" && value === "")
      (target as HTMLInputElement).value = maxValue.toString();
  };

  const removeZeros = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value !== "") target.value = (+target.value).toString();
  };

  return (
    <div className="flex flex-col max-w-[75px] sm:min-w-[125px]">
      <label
        htmlFor="day"
        className={`tracking-[0.2em] text-[0.6rem]/[1rem] sm:text-xs
        text-neutral-sGrey font-bold pb-2 ${error && "errorText"}`}
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
        className={`border-2 rounded-lg text-[1rem] sm:text-inputs
        font-bold pl-[0.85rem] py-2 outline-primary-purple`}
        onKeyDown={handleKeyDown}
        onChange={removeZeros}
      />
      {error && <p className="errorText text-xs mt-2 italic">{error}</p>}
    </div>
  );
};

export default Input;

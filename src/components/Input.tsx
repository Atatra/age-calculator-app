interface Props {
  id: string;
  name: string;
  placeholder: string;
  topLabel: string;
}
const Input = ({ id, name, placeholder, topLabel }: Props) => {
  return (
    <div className="flex flex-col max-w-[75px]">
      <label
        htmlFor="day"
        className="tracking-[0.2em] text-xs text-neutral-sGrey font-bold
        pb-1"
      >
        {topLabel}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        id={id}
        name={name}
        className="border-2 rounded-md text-[1rem] font-bold pl-[0.85rem]
        py-2"
      />
    </div>
  );
};

export default Input;

interface Props {
  id: string;
  name: string;
  placeholder: string;
  topLabel: string;
}
const Input = ({ id, name, placeholder, topLabel }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="day">{topLabel}</label>
      <input
        type="number"
        placeholder={placeholder}
        id={id}
        name={name}
        className="border-2 rounded-md w-[70%]"
      />
    </div>
  );
};

export default Input;

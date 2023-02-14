import { InputType } from "@/types";

export const Input = ({ name, placeholder, type, Icon }: InputType) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className=" w-full md:w-[21.25rem] h-[3.125rem] bg-white border-[#1A1919] border-[5px] rounded-[0.625rem] placeholder:text-[#CCCCCC] placeholder:tracking-[0.35em] px-3 py-1 pr-12"
      />
      <span className="absolute right-4 top-3">{Icon && <Icon />}</span>
    </div>
  );
};

Input.defaultProps = {
  Icon: undefined,
};

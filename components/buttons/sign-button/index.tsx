import Image from "next/image";
import { SignButtonProps } from "@/types";

export const SignButton = ({ text, Icon }: SignButtonProps) => (
  <button className="border border-black rounded-[0.313rem] flex flex-col justify-center items-center gap-y-2 lg:w-[15.625rem] h-[6.25rem] flex-shrink-0 ">
    {typeof Icon === "object" ? <Image alt="" src={Icon} /> : <Icon />}
    {text && <span className="font-semibold text-sm">{text}</span>}
  </button>
);

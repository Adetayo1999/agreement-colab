import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import userImage from "@/assets/images/user.svg";
import { Input } from "@/components/common/input";
import { LockIcon, MailIcon } from "@/assets/svg";
import { useAuth } from "@/context/auth-context";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { setAuthState } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthState(true);
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full bg-register bg-cover bg-left-bottom flex justify-center flex-col items-center p-10">
      <div className="mb-10">
        <h1 className="text-center text-xl lg:text-[2rem] font-bold tracking-[0.11em] lg:leading-[3rem] text-[#000000] uppercase">
          Fastest <br /> way to create agreements
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-y-6 md:gap-y-0 md:flex-row lg:justify-between justify-center  items-center sm:w-[90%] lg:w-[75%] mx-auto ">
        <div className="hidden lg:block flex-shrink-0">
          <Image src={userImage} height={300} width={500} alt="Login Image" />
        </div>
        <div className="">
          <form
            className="flex flex-col gap-y-4 lg:items-end"
            onSubmit={handleSubmit}
          >
            <Input
              name="email"
              placeholder="Email"
              type="text"
              Icon={MailIcon}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              Icon={LockIcon}
            />
            <button className="bg-[#F6FFC0] border-[5px] border-[#000000] rounded-[0.625rem] h-[3rem] w-[11rem] text-[#152235] tracking-[0.35em] font-bold">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

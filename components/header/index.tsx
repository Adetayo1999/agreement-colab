import { HamburgerIcon, LogoutIcon } from "@/assets/svg";
import { useModal } from "@/context";
import Link from "next/link";

export const Header = () => {
  const { toggleSidebar } = useModal();

  return (
    <header className="bg-white h-[4rem] lg:h-[6rem]  px-5 lg:px-10 py-2 flex justify-between items-center">
      <div className="">
        <button onClick={toggleSidebar}>
          <Link href="/">
            <span className="hidden lg:inline">
              <HamburgerIcon scale={0.9} />
            </span>
            <span className="inline lg:hidden">
              <HamburgerIcon scale={0.6} />
            </span>
          </Link>
        </button>
      </div>
      <div className="">
        <button>
          <Link href="/login">
            <span className="hidden lg:inline">
              <LogoutIcon scale={0.9} />
            </span>
            <span className="inline lg:hidden">
              <LogoutIcon scale={0.6} />
            </span>
          </Link>
        </button>
      </div>
    </header>
  );
};

import { FaTimesCircle } from "react-icons/fa";
import { HomeIcon, SettingsIcon, ProfileIcon } from "@/assets/svg";
import { useEffect, useRef } from "react";
import { useModal } from "@/context";
import Link from "next/link";

export const Sidebar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { isSidebarOpen, toggleSidebar } = useModal();

  useEffect(() => {
    if (isSidebarOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    if (isSidebarOpen) {
      sidebarRef?.current?.classList?.add("nav__active");
    } else {
      sidebarRef?.current?.classList?.remove("nav__active");
    }
  }, [isSidebarOpen]);

  return (
    <nav
      className="h-screen fixed w-full top-0 left-0 bg-black bg-opacity-30 nav"
      ref={sidebarRef}
    >
      <div className="w-[60%]  lg:w-[25%] bg-white h-full p-6 relative nav__container">
        <div className=" absolute right-4 ">
          <button className="" onClick={toggleSidebar}>
            <FaTimesCircle fontSize={20} />
          </button>
        </div>
        <ul className="flex  mt-10 flex-col gap-y-10">
          <li>
            <button className="w-full">
              <Link
                href="/"
                className="flex gap-x-4 items-center border-b border-[#F4F4F4] pb-3 w-full"
                onClick={() => toggleSidebar()}
              >
                <span className="hidden lg:inline">
                  <HomeIcon />
                </span>
                <span className="inline lg:hidden">
                  <HomeIcon scale={0.8} />
                </span>
                <span className="font-semibold text-sm lg:text-base">Home</span>
              </Link>
            </button>
          </li>
          <li>
            <button className="w-full">
              <Link
                href="/profile"
                className="flex gap-x-4 items-center border-b border-[#F4F4F4] pb-3 w-full"
                onClick={() => toggleSidebar()}
              >
                <span className="hidden lg:inline">
                  <ProfileIcon />
                </span>
                <span className="inline lg:hidden">
                  <ProfileIcon scale={0.8} />
                </span>
                <span className="font-semibold text-sm lg:text-base">
                  Profile
                </span>
              </Link>
            </button>
          </li>
          <li>
            <button className="w-full">
              <Link
                href="/profile"
                className="flex gap-x-4 items-center border-b border-[#F4F4F4] pb-3 w-full"
                onClick={() => toggleSidebar()}
              >
                <span className="hidden lg:inline">
                  <SettingsIcon />
                </span>
                <span className="inline lg:hidden">
                  <SettingsIcon scale={0.8} />
                </span>
                <span className="font-semibold text-sm lg:text-base">
                  Settings
                </span>
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

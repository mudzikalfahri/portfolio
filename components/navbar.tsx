import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const { systemTheme, theme, setTheme }: any = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const renderTheme = () => {
    if (!isMounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="text-md w-10 h-10 flex items-center rounded-md sm:justify-center"
        >
          <Image
            width={20}
            height={20}
            alt="dark"
            src="https://i.ibb.co/kS9STBF/moon.png"
          />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="text-md w-10 h-10 flex items-center rounded-md sm:justify-center"
        >
          <Image
            width={20}
            height={20}
            alt="light"
            src="https://i.ibb.co/WF5d9W6/brightness.png"
          />
        </button>
      );
    }
  };
  return (
    <nav className="fixed bg-white/50 duration-200 dark:bg-navblue/70 dark:text-white backdrop-blur-xl w-full border-b border-gray-300 dark:border-navblue md:border-0 z-30">
      <div className="max-w-3xl mx-auto items-center flex justify-between py-4 font-normal px-4 md:px-0">
        <div className="w-8 h-8 mr-4 rounded-full bg-gray-800 flex items-center justify-center">
          🧑‍💻
        </div>
        <div
          className={
            menu
              ? "md:mt-0 flex-1 fixed top-0 right-0 z-10 sm:static w-full h-screen bg-white dark:bg-darkblue dark:sm:bg-transparent flex items-center justify-center sm:h-auto sm:flex-row sm:bg-transparent sm:inline sm:ml-2"
              : "md:mt-0 flex-1 fixed top-0 right-0 z-10 sm:static w-full h-screen bg-white dark:bg-darkblue dark:sm:bg-transparent hidden items-center justify-center sm:h-auto sm:flex-row sm:bg-transparent sm:inline sm:ml-2"
          }
        >
          <button
            onClick={() => setMenu(false)}
            className="p-2 border-none dark:bg-gray-700 dark:active:bg-gray-600 duration-150 bg-gray-100 sm:hidden absolute top-0 right-0 m-6 rounded-md active:bg-gray-300"
          >
            <AiOutlineClose />
          </button>
          <div className="text-md flex items-center sm:space-x-2 space-y-4 sm:space-y-0 flex-col sm:flex-row">
            <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Home
            </div>
            <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              About
            </div>
            <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Project
            </div>
            <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Link
            </div>
          </div>
        </div>
        <div className="flex-1 sm:flex-none flex justify-end">
          {renderTheme()}
        </div>
        <button
          className="p-2 bg-gray-200 dark:bg-gray-700 dark:active:bg-gray-600 sm:hidden rounded-md border-none text-xl active:bg-gray-300 duration-150"
          onClick={() => setMenu(true)}
        >
          <HiMenuAlt3 />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

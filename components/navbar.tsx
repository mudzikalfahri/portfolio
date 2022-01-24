import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

function Navbar() {
  const { systemTheme, theme, setTheme }: any = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const renderTheme = () => {
    if (!isMounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button onClick={() => setTheme("light")}>
          <Image
            width={25}
            height={25}
            alt="dark"
            src="https://i.ibb.co/kS9STBF/moon.png"
            className="w-6 h-6"
          />
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")}>
          <Image
            width={25}
            height={25}
            alt="light"
            src="https://i.ibb.co/WF5d9W6/brightness.png"
            className="w-6 h-6"
          />
        </button>
      );
    }
  };
  return (
    <nav className="fixed bg-white/50 duration-200 dark:bg-navblue/70 dark:text-white backdrop-blur-xl w-full border-b border-gray-300 dark:border-navblue md:border-0 z-30">
      <div className="max-w-3xl mx-auto place-items-center flex justify-between py-4 font-normal px-6 lg:px-0">
        <div className="md:mt-0">
          <div className="text-md flex items-center space-x-2">
            <div className="w-8 h-8 mr-4 rounded-full bg-gray-800 flex items-center justify-center">
              🧑‍💻
            </div>
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
        <div className="text-md flex justify-center">{renderTheme()}</div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

//
function Navbar() {
  const { systemTheme, theme, setTheme }: any = useTheme();
  const [menu, setMenu] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="fixed top-0 left-0 bg-white/50 duration-200 dark:bg-darkblue/70 dark:text-white backdrop-blur-xl w-full border-b border-gray-300 dark:border-navblue md:border-0 z-30">
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
            <Link href="/" passHref>
              <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                Home
              </div>
            </Link>
            <Link href="/about" passHref>
              <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                Dashboard
              </div>
            </Link>

            <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Project
            </div>
            <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              Link
            </div>
          </div>
        </div>
        <div className="flex-1 sm:flex-none flex justify-end">
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="text-md w-9 bg-gray-700 overflow-hidden h-9 flex items-center rounded-md sm:justify-center"
            >
              <motion.span initial={{ y: -20 }} animate={{ y: 0 }}>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </motion.span>
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="text-md w-9 text-gray-700 overflow-hidden bg-gray-200 h-9 flex items-center rounded-md sm:justify-center"
            >
              <motion.svg
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </motion.svg>
            </button>
          )}
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

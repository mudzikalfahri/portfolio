import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
          <img src="https://i.ibb.co/kS9STBF/moon.png" className="w-6 h-6" />
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")}>
          <img
            src="https://i.ibb.co/WF5d9W6/brightness.png"
            className="w-6 h-6"
          />
        </button>
      );
    }
  };
  return (
    <nav className="fixed bg-white duration-200 dark:bg-navblue dark:text-white shadow-md w-full border-b border-gray-300 dark:border-navblue md:border-0 z-30">
      <div className="max-w-3xl mx-auto place-items-center flex justify-between py-5 font-normal px-6 lg:px-0">
        <div className="w-2/4 md:w-1/4 md:mt-0">
          <ul className="text-md flex justify-between">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="text-md flex justify-center">{renderTheme()}</div>
      </div>
    </nav>
  );
}

export default Navbar;

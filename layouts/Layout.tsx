import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({
  children,
  meta,
}: {
  children: ReactNode;
  meta: ReactNode;
}): JSX.Element => {
  return (
    <>
      {meta}
      <div className="min-h-screen bg-bg dark:bg-darkblue duration-200 overflow-hidden">
        {/* body */}

        <Navbar />
        <div className="max-w-3xl mx-auto px-4 text-gray-800 dark:text-white">
          <div className="w-full h-32 absolute bg-gradient-to-b hidden dark:inline from-transparent dark:to-darkblue top-0 blur-2xl left-0 animate-pulse-slow">
            <div className="bg-gradient-to-r opacity-30 from-blue-400 via-indigo-500 to-purple-600 w-full md:w-4/5 h-32"></div>
          </div>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

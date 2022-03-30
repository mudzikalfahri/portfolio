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
      <div className="min-h-screen bg-bg dark:bg-darkblue duration-200">
        {/* body */}

        <Navbar />
        <div className="max-w-3xl mx-auto px-4 md:px-0 text-gray-800 dark:text-white">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

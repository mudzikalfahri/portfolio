import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Head>
        <title>Mudzik Al Fahri - Frontend Developer</title>
      </Head>
      <div className="min-h-screen bg-bg dark:bg-darkblue duration-200">
        {/* body */}
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 md:px-0 pt-28 md:pt-32 text-gray-800 dark:text-white">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Head>
        <title>Mudzik Al Fahri - Web Developer</title>
      </Head>
      <div className="min-h-screen bg-cusblue dark:bg-darkblue duration-200">
        {/* body */}
        <Navbar />
        <div className="max-w-3xl mx-auto px-3 md:px-0 pt-40 md:pt-28 text-gray-800 dark:text-white">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

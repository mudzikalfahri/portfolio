import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Head>
        <title>Mudzik Al Fahri - Web Developer</title>
      </Head>
      <div className="min-h-screen bg-cusblue">
        {/* body */}
        <Navbar />
        <div className="max-w-3xl mx-auto pt-40 md:pt-28 text-gray-800 ">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

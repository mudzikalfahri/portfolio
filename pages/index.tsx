import type { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Head from "next/head";
import ProjectCard from "../components/projectcard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mudzik AL Fahri - Web Developer</title>
      </Head>
      <div className="min-h-screen">
        {/* body */}
        <Navbar />
        <div className="max-w-3xl mx-auto pt-40 md:pt-32">
          <div className="flex justify-between place-items-center">
            <div className="mr-12">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-200 to-indigo-400 rounded-full"></div>
            </div>
            <div className="">
              <h3 className="text-3xl pb-2 border-b border-gray-300 w-max font-bold text-gray-800 mb-3 flex items-center">
                <span className="mr-1">Hey</span> 👋
              </h3>
              <p className="text-gray-800 text-xl leading-loose">
                My name is Fahri and I{"'"}m from Yogyakarta, Indonesia. I’m a
                third year computer engineering student at Diponegoro
                University. I love javascript and react. I{"'"}d like to go in
                for fullstack web developer
              </p>
            </div>
          </div>

          <div className="mt-20 mb-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight pb-2 border-b border-gray-300 w-max">
              A few project
              <br /> that i{"'"}ve been built
            </h1>
            <p className="text-gray-500 text-md leading-loose"></p>
            <div className="">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

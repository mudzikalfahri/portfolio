import type { NextPage } from "next";
import ProjectCard from "../components/projectcard";
import Layout from "../components/layout";
import { data } from "../prisma/data";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-between place-items-center">
        <div className="text-center">
          <div className="mb-10">
            <div className="w-full h-32 mx-auto bg-gradient-to-r from-pink-200 to-purple-400 rounded-full"></div>
          </div>
          <h3 className="text-3xl pb-2 mx-auto border-b border-gray-300 w-max font-bold mb-3 flex items-center">
            <span className="mr-1">Hey</span> 👋
          </h3>
          <p className="text-gray-800 text-xl leading-loose w-11/12 mx-auto">
            My name is <span className="font-bold">Fahri</span> and I{"'"}m from
            Yogyakarta, Indonesia. I’m a third year computer engineering student
            at Diponegoro University. I love javascript and react. I{"'"}d like
            to go in for fullstack web developer
          </p>
        </div>
      </div>

      <div className="my-10 flex place-items-center hover:shadow-lg duration-200 text-purple-500 justify-center w-1/2 mx-auto px-5 py-5 bg-white border border-gray-200 rounded-xl">
        <a
          href="https://github.com/mudzikalfahri"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 hover:underline cursor-pointer "
        >
          Resume
        </a>
        <a
          href="https://github.com/mudzikalfahri"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 hover:underline cursor-pointer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/mudzik-al-fahri-278538203/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 hover:underline cursor-pointer"
        >
          Linkedin
        </a>
      </div>

      <div className="mt-20 mb-20">
        <h1 className="text-4xl font-bold mb-6 leading-snug pb-2 border-b border-gray-300 w-max">
          A few project
          <br /> that i{"'"}ve been built
        </h1>
        <p className="text-gray-500 text-md leading-loose"></p>
        <div className="mb-5">
          {data.map(({ ...prop }, idx) => (
            <ProjectCard key={idx} color={idx} {...prop} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

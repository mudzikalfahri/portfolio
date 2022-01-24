import type { NextPage } from "next";
import ProjectCard from "@components/projectcard";
import Layout from "@components/layout";
import { data } from "../prisma/data";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="main relative max-w-3xl mx-auto flex gap-6">
        <div className="flex flex-col border-gray-700">
          <div className="flex overflow-hidden font-bold text-5xl sm:text-6xl dark:bg-gradient-to-r from-green-300 via-green-400 to-green-500 dark:text-transparent bg-clip-text">
            {`Hi, I'm Fahri`}
          </div>
          <div className="flex items-center space-x-4 my-2">
            <div className="px-3 py-1 rounded-md bg-red-200 dark:bg-opacity-10 dark:text-red-300 bg-opacity-40 text-sm">
              Student
            </div>
            <div className="px-3 py-1 rounded-md bg-blue-200 dark:bg-opacity-10 dark:text-blue-300 bg-opacity-40 text-sm">
              Developer
            </div>
            <div className="px-3 py-1 rounded-md bg-purple-200 dark:bg-opacity-10 dark:text-purple-300 bg-opacity-40 text-sm">
              Sleeper
            </div>
          </div>
          <div className="text-gray-700 font-normal">
            <p className="sm:text-lg mt-2 leading-relaxed dark:text-gray-100">
              {`Welcome to my gallery! I am a Frontend Developer based in
              Indonesia. Here I want to show you all the projects I made. I love
              javascript, react, tailwind and the ecosystem. Most of my projects
              I build using react and next. I am currently taking a bachelor's degree in
              computer engineering at Diponegoro University.`}
            </p>
          </div>
          <div className="text-sm group font-normal overflow-hidden relative mt-6 py-2 px-4 cursor-pointer border bg-gray-700 border-gray-700 hover:text-gray-700 duration-200 w-max text-gray-100 rounded-md">
            <div className="">See my Works</div>
            <div className="absolute hidden group-hover:inline text-gray-700 z-30 top-0 py-2 left-0 w-full text-center">
              See my Works
            </div>
            <div className="group-hover:w-36 h-20 w-20 duration-300 group-hover:-top-10 group-hover:h-36 absolute top-10 bg-cusblue rounded-full -left-3"></div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20">
        <div className="text-lg font-semibold rounded-md relative py-1 w-max mb-5">
          <div className="absolute bottom-2 w-full h-2 bg-blue-200 rounded-sm dark:bg-transparent"></div>
          <div className="relative text-2xl">Projects</div>
        </div>
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

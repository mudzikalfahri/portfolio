import type { NextPage } from "next";
import ProjectCard from "../components/projectcard";
import Layout from "../components/layout";
import { data } from "../prisma/data";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex mb-12 justify-between place-items-center">
        <div className="flex md:flex-row flex-col-reverse place-items-center justify-between">
          <div className="md:w-3/4">
            <h3 className="text-2xl md:text-4xl pb-1 border-b border-gray-300 w-max font-bold mb-3 flex items-center">
              <span className="mr-1">Hi there 👋, I{"'"}m Fahri</span>
            </h3>
            <p className="text-md md:text-lg leading-loose mx-auto">
              I{"'"}m from Yogyakarta, Indonesia. I’m a third year computer
              engineering student at Diponegoro University. I{"'"}d like to go
              in for fullstack web developer.
            </p>
          </div>
          <div className="mb-10 md:mb-0">
            <div
              className={`w-32 md:w-32 h-32 duration-200 mx-auto bg-gradient-to-r dark:from-blue-200 dark:to-blue-400 from-pink-200 to-purple-400 rounded-full`}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex place-items-center hover:shadow-lg duration-200 text-purple-500 dark:text-green-200 justify-center md:text-md text-sm md:w-1/2 mx-auto px-5 py-5 bg-white dark:bg-uiblue border border-gray-200 rounded-xl dark:border-gray-700">
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
        <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-snug pb-2 border-b border-gray-300 w-max">
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

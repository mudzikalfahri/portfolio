import type { NextPage } from "next";
import ProjectCard from "@components/projectcard";
import Layout from "@components/layout";
import { data } from "@utils/data";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="main relative max-w-3xl mx-auto flex gap-6"
      >
        <div className="flex flex-col border-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
            }}
            className="flex overflow-hidden font-bold text-5xl sm:text-6xl dark:bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500 dark:text-transparent bg-clip-text"
          >
            {`Hi, I'm Fahri`}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: "spring",
            }}
            className="flex items-center space-x-4 my-2"
          >
            <div className="px-3 py-1 rounded-md bg-red-200 dark:bg-opacity-10 dark:text-red-300 bg-opacity-40 text-sm">
              Student
            </div>
            <div className="px-3 py-1 rounded-md bg-blue-200 dark:bg-opacity-10 dark:text-blue-300 bg-opacity-40 text-sm">
              Developer
            </div>
            <div className="px-3 py-1 rounded-md bg-purple-200 dark:bg-opacity-10 dark:text-purple-300 bg-opacity-40 text-sm">
              Sleeper
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "spring",
            }}
            className="text-gray-700 font-normal"
          >
            <p className="sm:text-lg mt-2 leading-relaxed dark:text-gray-100">
              {`Welcome to my gallery! I am a Frontend Developer based in
              Indonesia. Here I want to show you all the projects I made. I love
              javascript, react, tailwind and the ecosystem. Most of my projects
              I build using react and next. I am currently taking a bachelor's degree in
              computer engineering at Diponegoro University.`}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
            }}
            className="py-2 mt-6 dark:bg-gray-700/60 cursor-pointer px-4 max-w-max font-medium rounded-md bg-gray-700 border border-gray-500 relative group overflow-hidden text-sm text-center text-white"
          >
            <div className="h-0.5 group group-hover:w-full rounded-lg duration-200 w-0 bg-white absolute left-0 bottom-0"></div>
            See my Works
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20 mb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: "spring",
          }}
          className="text-lg font-semibold rounded-md relative py-1 w-max mb-5"
        >
          <div className="absolute bottom-2 w-full h-2 bg-blue-200 rounded-sm dark:bg-transparent"></div>
          <div className="relative text-2xl">Projects</div>
        </motion.div>
        <p className="text-gray-500 text-md leading-loose"></p>
        <div className="mb-5">
          {data.map(({ ...prop }, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + 0.2 * idx,
                type: "spring",
                stiffness: 70,
              }}
              key={idx}
            >
              <ProjectCard color={idx} {...prop} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;

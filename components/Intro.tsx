import React from "react";
import { motion } from "framer-motion";
import Button from "@components/Button";

function Intro() {
  return (
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
              javascript and react. Most of my projects i build using react and next. 
              I am currently taking a bachelor's degree in computer engineering at Diponegoro University.`}
          </p>
        </motion.div>
        <Button name="See my Works" />
      </div>
    </motion.div>
  );
}

export default Intro;

import type { NextPage } from "next";
import ProjectCard from "@components/ProjectCard";
import Layout from "layouts/Layout";
import { data } from "@utils/data";
import { motion } from "framer-motion";
import Intro from "@components/Intro";
import { Meta } from "layouts/Meta";

const Home: NextPage = () => {
  return (
    <Layout
      meta={
        <Meta
          title="Mudzik Al Fahri - Frontend Developer"
          description="Welcome to my personal page"
        />
      }
    >
      <Intro />
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
          className="text-lg font-bold rounded-md relative py-1 w-max mb-5"
        >
          {/* <div className="absolute bottom-2 w-full h-2 bg-blue-200 rounded-sm dark:bg-transparent"></div> */}
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

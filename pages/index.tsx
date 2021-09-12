import type { NextPage } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* body */}
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-40 md:pt-28">
        <div className="">
          <h3 className="text-md text-indigo-400 mb-3 font-semibold flex items-center">
            {" "}
            HELLO THERE,
          </h3>
          <h1 className="text-4xl font-bold mb-4">I'm Mudzik Al Fahri 👋</h1>
          <p className="text-gray-500 text-md leading-loose">
            I'm from Yogyakarta, Indonesia. I’m a third year computer
            engineering student at Diponegoro University. I love javascript and
            react. I'd like to go in for fullstack web developer
          </p>
          {/* <p className="mt-3 underline">About Me</p>{" "}
          <span>
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span> */}
        </div>

        <div className="mt-10 mb-10">
          <h3 className="text-md mb-3 text-yellow-500 font-semibold flex items-center">
            {" "}
            PROJECT
          </h3>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            A few project
            <br /> that i've been built
          </h1>
          <p className="text-gray-500 text-md leading-loose"></p>
          <div className="">
            <div className="border border-gray-500 mb-4 rounded-lg py-3 px-4">
              <h1 className="text-xl font-semibold mb-2">
                Wefootwear E-commerce
              </h1>
              <p className="text-gray-500">
                I make this e-commerce website using Next.js and TailwindCSS for
                the frontend, and i'm also using strapi CMS to manage the
                content of the website
              </p>
              <div className="flex text-blue-700 mt-2 space-x-2">
                <a href="" className="hover:underline">
                  Demo
                </a>
                <a href="" className="hover:underline">
                  Github Repo
                </a>
              </div>
            </div>
            <div className="border border-gray-500 mb-4 rounded-lg py-3 px-4">
              <h1 className="text-xl font-semibold mb-2">Chatting App</h1>
              <p className="text-gray-500">
                This website is built using Reactjs on the frontend and i use
                Firebase to store the messages and user data
              </p>
              <div className="flex text-blue-700 mt-2 space-x-2">
                <a href="" className="hover:underline">
                  Demo
                </a>
                <a href="" className="hover:underline">
                  Github Repo
                </a>
              </div>
            </div>
            <div className="border border-gray-500 mb-4 rounded-lg py-3 px-4">
              <h1 className="text-xl font-semibold mb-2">Football News Blog</h1>
              <p className="text-gray-500">
                This website is a blog for football news around the world. This
                website built using Nextjs and TailwindCSS
              </p>
              <div className="flex text-blue-700 mt-2 space-x-2">
                <a href="" className="hover:underline">
                  Demo
                </a>
                <a href="" className="hover:underline">
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          {/* <p className="mt-3 underline">View Project</p>{" "}
          <span>
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

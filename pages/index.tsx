import type { NextPage } from 'next'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* body */}
      <Navbar/>
      <div className="max-w-3xl mx-auto px-6 pt-40 md:pt-28">
        <div className="">
          <h3 className="text-md text-indigo-400 font-semibold flex items-center">
            {" "}
            HELLO THERE,
          </h3>
          <h1 className="text-5xl font-bold my-4">I'm Mudzik Al Fahri 👋</h1>
          <p className="text-gray-500 text-md leading-loose">
            I'm from Yogyakarta, Indonesia. I’m a third year computer
            engineering student at Diponegoro University. I love javascript and react. I'd like to go in for fullstack web developer
          </p>
          <p className="mt-3 underline">About Me</p>{" "}
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
          </span>
        </div>

        <div className="mt-10 mb-10">
          <h3 className="text-md text-yellow-500 font-semibold flex items-center">
            {" "}
            PROJECT
          </h3>
          <h1 className="text-5xl font-bold my-4 leading-tight">
            A few project
            <br /> that i've been built
          </h1>
          <p className="text-gray-500 text-md leading-loose"></p>
          <div className="grid grid-rows-2 gap-y-4 md:grid-cols-2 md:grid-rows-1 gap-x-3">
            <div className="w-full border border-gray-200 h-72 rounded-lg bg-white motion-safe:hover:-translate-y-1 hover:shadow-lg duration-300 cursor-pointer"></div>
            <div className="w-full border border-gray-200 h-72 rounded-lg bg-white motion-safe:hover:-translate-y-1 hover:shadow-lg duration-300 cursor-pointer"></div>
          </div>
          <p className="mt-3 underline">View Project</p>{" "}
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
          </span>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-bggray px-4 md:px-0">
      <div className="max-w-3xl mx-auto h-16 flex flex-col-reverse py-2 md:flex-row md:py-0 items-center justify-between">
        <p className="text-sm text-gray-700">© 2021 Mudzik Al Fahri</p>
        <div className="flex items-center">
          <div className="w-10 h-10 ml-2 flex items-center justify-center cursor-pointer duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <AiFillGithub className="text-lg " />
          </div>
          <div className="w-10 h-10 ml-2 hover:text-blue-600 flex items-center justify-center cursor-pointer duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <FaFacebookSquare className="text-lg " />
          </div>
          <div className="w-10 h-10 ml-2 hover:text-red-500 flex items-center justify-center cursor-pointer duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <BsInstagram className="text-lg " />
          </div>
          <div className="w-10 h-10 ml-2 flex hover:text-blue-500 items-center justify-center cursor-pointer duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <FaLinkedin className="text-lg " />
          </div>
          <div className="w-10 h-10 ml-2 hover:text-blue-500 flex items-center justify-center cursor-pointer duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <BsTwitter className="text-lg " />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

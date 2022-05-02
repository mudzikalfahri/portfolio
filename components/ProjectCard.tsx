import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

interface Props {
  title: string;
  stack: any;
  desc: string;
  color: number;
  link: string;
}

//

function ProjectCard({ title, stack, desc, color, link }: Props) {
  const styledSquare = [
    "from-blue-200 to-indigo-400",
    "from-green-200 to-green-400",
    "from-yellow-200 to-red-400",
  ];
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="border flex hover:border-gray-700 place-items-center cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-200 border-gray-200 mb-5 bg-white dark:border-gray-700 group dark:bg-uiblue rounded-lg py-3 px-4 relative">
        <div className="w-10 group-hover:flex hidden duration-150 h-10 items-center justify-center absolute -top-3 -right-3 rounded-full bg-gray-700 text-white">
          <BsBoxArrowUpRight />
        </div>
        <div className="mr-4 place-self-start py-1">
          <div
            className={`sm:w-12 sm:h-12 w-8 h-8 rounded-xl bg-gradient-to-r p-1 ${
              styledSquare[(color + 3) % 3]
            } text-gray-100 text-xx`}
          ></div>
        </div>
        <div className="w-5/6">
          <div className="md:flex place-items-center mb-1">
            <h1 className="text-md font-semibold text-blue-700 dark:text-blue-400 mb-1 md:mb-0 mr-2">
              {title}
            </h1>
            <div className="flex items-center flex-wrap gap-y-2 gap-x-1">
              {stack.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-blue-200 dark:bg-opacity-10 dark:text-blue-300 bg-opacity-40 text-xx"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-500 dark:text-white text-xs md:text-xs mb-1 line-clamp-2">
            {desc}
          </p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;

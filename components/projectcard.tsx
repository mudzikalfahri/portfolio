import React from "react";

function ProjectCard() {
  return (
    <div className="border flex place-items-center cursor-pointer hover:shadow-xl duration-200 border-gray-200 mb-6 bg-white rounded-lg py-3 px-4">
      <div className="w-1/6 place-self-start py-1">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-200 to-indigo-400"></div>
      </div>
      <div className="">
        <div className="flex place-items-center mb-1">
          <h1 className="text-md font-semibold text-blue-700 mr-2">
            Wefootwear
          </h1>
          <div className="flex place-items-center">
            <div className="px-2 mr-1.5 py-0.5 rounded-md bg-blue-200 bg-opacity-40 text-xx">
              javascript
            </div>
            <div className="px-2 mr-1.5 py-0.5 rounded-md bg-blue-200 bg-opacity-40 text-xx">
              react
            </div>
            <div className="px-2 mr-1.5 py-0.5 rounded-md bg-blue-200 bg-opacity-40 text-xx">
              nextjs
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-md line-clamp-2">
          This is an example of E-Commerce website built using nextjs. Many
          features like catalogue page, sign up and login, wishlist, and payment
          are available on this website.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;

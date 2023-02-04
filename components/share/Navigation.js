import React from "react";

const Navigation = () => {
  return (
    <div>
      <div className="relative bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <h4 className="text-xl font-normal leading-8">
                  <span className="bg-[#6765F0] rounded-2xl font-grotesque  text-white px-4 py-3">
                    Gym{" "}
                  </span>{" "}
                  <span className=" font-grotesque ml-1">baran</span>
                </h4>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <nav className="hidden md:flex space-x-10">
                <a
                  href="#"
                  className="text-base font-normal text-gray-500 hover:text-gray-900 font-poppins"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-base font-normal text-gray-500 hover:text-gray-900 font-poppins"
                >
                  Program
                </a>
                <a
                  href="#"
                  className="text-base font-normal text-gray-500 hover:text-gray-900 font-poppins"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-base font-normal text-gray-500 hover:text-gray-900 font-poppins"
                >
                  About us
                </a>
              </nav>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#264373] hover:bg-[#11387a]"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

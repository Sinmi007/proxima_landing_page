import React from "react";

const Navbar2 = () => {
  return (
    <div className="flex p-2 bg-white w-full sticky top-0 z-[20]">
      <div className="navbar  justify-between items-center bg-white sticky top-0 z-[20] ">
        <div className="navbar-start ">
          <div className="md:px-8">
            <a className="btn btn-ghost ">
              <img src="logo.png" alt="logo" className=" w-full " />
            </a>
          </div>
        </div>
        <div className="navbar-end hidden px-8 lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="/about.jsx"
                className="text-black hover:text-indigo-500 font-sans  text-base"
              >
                What we do
              </a>
            </li>
            <li>
              <details>
                <summary className="text-black hover:text-indigo-500 font-sans text-base">
                  Company
                </summary>
                <ul className=" bg-white rounded-t-none w-52  p-2">
                  <li>
                    <a className="text-black hover:text-indigo-500  font-sans text-base">
                      <div className="bg-lime-100 p-1 rounded-sm">
                        <img
                          src="lightbulb.png"
                          alt="lightbulb"
                          className="size-3"
                        />
                      </div>
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-indigo-500  font-sans text-base">
                      <div className="bg-lime-100 p-1 rounded-sm">
                        <img src="legal.png" alt="legal" className="size-3" />
                      </div>
                      Legal
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="/career.jsx"
                className="text-black hover:text-indigo-500  font-sans text-base"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="/contact.jsx"
                className="text-black hover:text-indigo-500  font-sans text-base"
              >
                Contact us
              </a>
            </li>
          </ul>
          <a
            href="/talk.jsx"
            className="btn bg-violet-500 text-white border-transparent font-sans rounded-full w-32"
          >
            Let's Talk
          </a>
        </div>

        {/* Dropdown */}

        <div className=" dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost m-1 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content  z-[1] mt-2  bg-white w-screen px-8 "
          >
            <div className="flex flex-col gap-y-48 justify-between p-4">
              <div className="flex flex-col">
                <li>
                  <a
                    href="/about.jsx"
                    className="text-black hover:text-indigo-500 font-sans font-medium text-base"
                  >
                    What we do
                  </a>
                </li>
                <li>
                  <details>
                    <summary className="text-black hover:text-indigo-500 font-sans font-medium text-base">
                      Company
                    </summary>
                    <ul className=" bg-white rounded-t-none w-52  p-2">
                      <li>
                        <a className="text-black hover:text-indigo-500  font-sans font-medium text-base">
                          <div className="bg-lime-100 p-1 rounded-sm">
                            <img
                              src="lightbulb.png"
                              alt="lightbulb"
                              className="size-3"
                            />
                          </div>
                          About
                        </a>
                      </li>
                      <li>
                        <a className="text-black hover:text-indigo-500 font-medium font-sans text-base">
                          <div className="bg-lime-100 p-1 rounded-sm">
                            <img
                              src="legal.png"
                              alt="legal"
                              className="size-3"
                            />
                          </div>
                          Legal
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a
                    href="/career.jsx"
                    className="text-black hover:text-indigo-500 font-medium font-sans text-base"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="/contact.jsx"
                    className="text-black hover:text-indigo-500 font-medium font-sans text-base"
                  >
                    Contact us
                  </a>
                </li>
              </div>
              <div className="flex flex-col md:flex-row  justify-normal items-center   space-x-6   ">
                <button className="btn ml-4 mb-4 md:ml-0 md:mb-0  w-full  bg-violet-500 text-white border-transparent font-medium rounded-full  md:hidden">
                  Let's Talk
                </button>
                <button className="btn w-full bg-white btn-outline  text-black font-medium border-gray-300 rounded-full md:hidden">
                  Learn more
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;

import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-white items-center p-6 ">
      <div className="flex justify-between items-center  px-8 w-full">
        <div className="flex items-center">
          <img src="logo.png" alt="logo" className="h-8 " />
        </div>

        <div className="flex justify-end items-center">
          <a
            href="#"
            className="text-black font-body text-sm hover:text-violet-500"
          >
            All rights reserved
          </a>
          <span className="font-body text-sm text-gray-400 px-1 underline">
            Proximaforte
          </span>

          <p className="text-black font-body text-sm text-center">
            | -Copyright&copy; {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

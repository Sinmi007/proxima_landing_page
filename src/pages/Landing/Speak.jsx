import React from "react";

const Speak = () => {
  return (
    <div className="flex bg-white items-center md:justify-center gap-x-10 p-20 w-full">
      <div className="flex bg-purples rounded-3xl px-36">
        <div className="flex flex-col space-y-8  justify-center ">
          <div className="flex max-w-96 px-0">
            <span className="text-white font-body text-4xl font-bold leading-tight ">
              Get Started with Proximaforte Today!
            </span>
          </div>
          <div></div>

          {/* button */}
          <div className="flex space-x-6 px-0">
            <button className="btn bg-lime-400 hover:bg-violet-500 text-black border-transparent rounded-full w-52">
              Speak to an Expert
            </button>
          </div>
        </div>

        {/* image */}
        <div className="flex size-96 ">
          <img
            src="imageContainer.png"
            alt="imageContainer"
            className="size-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Speak;

import React from "react";

const innovate = () => {
  return (
    <div className="flex flex-col medium-screen:flex-row flex-grow  bg-white items-center justify-center gap-x-10 border-b p-20 w-full">
      <div className="flex flex-col space-y-8  max-w-2xl justify-items-stretch ">
        <div>
          <span className="text-black font-sora text-3xl medium-screen:text-5xl font-bold leading-tight ">
            Innovating Fintech, Social Welfare and Data Management
          </span>
        </div>
        <div>
          <span className=" font-base font-sans items-center md:max-w-2xl">
            Born from a commitment to shaping the future of financial and
            welfare services. Our journey is marked by a relentless pursuit of
            innovation in service of greater good.
          </span>
        </div>

        {/* buttons */}
        <div className="flex flex-col md:flex-row  justify-center items-center md:justify-normal md:items-start  space-x-6 py-10">
          <button className="btn ml-4 mb-4 md:ml-0 md:mb-0  w-full  bg-violet-500 text-white border-transparent font-medium rounded-full  md:w-32">
            Let's Talk
          </button>
          <button className="btn w-full bg-white btn-outline  text-black font-medium border-gray-300 rounded-full md:w-32">
            Learn more
          </button>
        </div>
      </div>

      {/* image */}
      <div className="flex ">
        <img src="world2.png" alt="world2" className="size-full" />
      </div>
      <div></div>
    </div>
  );
};

export default innovate;

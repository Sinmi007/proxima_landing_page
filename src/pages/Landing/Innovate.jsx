import React from "react";

const innovate = () => {
  return (
    <div className="flex flex-col medium-screen:flex-row flex-grow  bg-white items-center justify-center gap-x-10 border-b p-20 w-full">
      <div className="flex flex-col space-y-8  max-w-2xl justify-items-stretch ">
        <div>
          <span className="text-black font-body text-3xl medium-screen:text-5xl font-bold leading-tight ">
            Innovating Fintech, Social Welfare and Data Management
          </span>
        </div>
        <div>
          <span className=" font-base font-body items-center">
            Born from a commitment to shaping the future of financial and
            welfare services. Our journey is marked by a relentless pursuit of
            innovation in service of greater good.
          </span>
        </div>

        {/* buttons */}
        <div className="flex space-x-6">
          <button className="btn bg-violet-500 text-white border-transparent rounded-full w-32">
            Let's Talk
          </button>
          <button className="btn bg-white btn-outline text-black border-gray-300 rounded-full w-32">
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

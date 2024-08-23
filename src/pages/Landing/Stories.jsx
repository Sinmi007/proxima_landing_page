import React from "react";

const Stories = () => {
  return (
    <div className="flex flex-col  bg-gray-100  items-center justify-center pb-10 ">
      <div className="flex flex-row relative  items-center justify-center  p-8 w-full">
        <div className="flex-col  items-center justify-center p-4 z-10 ">
          <div>
            <span className="flex items-center justify-center text-gray-400 font-body text-4xl font-semibold leading-tight ">
              Real stories.
            </span>
          </div>
          <div>
            <span className="flex items-center justify-center text-slate-700 font-body text-4xl font-semibold leading-tight ">
              Don't take our word for it.
            </span>
          </div>
        </div>
        <div className="absolute right-72">
          <img src="container5.png" alt="container5" className="  h-40 " />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4">
        <div className="flex flex-row bg-yellow-100 rounded-2xl">
          <div className="flex justify-center items-center p-4">
            <img src="container7.png" alt="container7" className="h-64" />
          </div>
        </div>

        <div className="flex flex-row bg-white rounded-2xl">
          <div className="flex justify-center items-center p-4">
            <img src="container8.png" alt="container8" className="h-64" />
          </div>
        </div>
        {/* 
        <div className="flex flex-row bg-yellow-300 rounded-2xl">
          <div className="flex justify-center items-center p-4">
            <img src="container9.png" alt="container9" className="h-64" />
          </div>
        </div> */}
      </div>

      <div className="p-12">
        <button
          className="btn  btn-sm bg-transparent hover:bg-lime-400  text-slate-700 text-xs border-violet-500
      rounded-full font-body w-32 "
        >
          Read all stories
        </button>
      </div>
    </div>
  );
};

export default Stories;

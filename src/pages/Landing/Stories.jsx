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
        <div className="absolute right-72 hidden lg:flex">
          <img src="container5.png" alt="container5" className="h-40" />
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
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
        
        <div className="flex flex-row bg-yellow-300 rounded-2xl">
          <div className="flex justify-center items-center p-4">
            <img src="container9.png" alt="container9" className="h-64" />
          </div>
        </div>
      </div> */}

      <div className="flex carousel carousel-center   bg-gray-100 rounded-box max-w-md md:max-w-6xl space-x-4 p-4">
        <div className="flex flex-row carousel-item justify-between  max-w-4xl  bg-yellow-100 rounded-xl p-4">
          <div className="m-3">
            <img src="story1.png" alt="story1" className="max-w-xs" />
          </div>
          <img src="star.png" alt="star" className="size-12 " />
          <div className="flex flex-col my-5 ">
            <span className="text-slate-900 font-sans text-3xl  font-normal leading-8">
              “The deployment of Optima has helped us overcome data management
              setbacks by facilitating accurate data collection and allowing us
              make better-informed decisions to improve the lives of Kwara
              State's citizens."
            </span>
            <span className="flex text-slate-900 font-body font-semibold  pt-6">
              Mr. Tajudeen Jimoh
            </span>
            <span className="flex text-slate-500 font-body text-xs font-normal ">
              GM, KWASRRA
            </span>
          </div>
        </div>

        <div className="flex flex-row carousel-item justify-between  max-w-4xl  bg-white rounded-xl p-4">
          <div className="m-3">
            <img src="story3.png" alt="story3" className="max-w-xs" />
          </div>

          <div className="flex flex-col my-5 ">
            <span className="text-slate-900 font-sans text-3xl  font-normal leading-8 pt-4">
              "We struggled to find the right disbursement processed, but with
              vast data and palliative disbursement structure, the exercise was
              seamless"
            </span>
            <span className="flex text-slate-900 font-body font-semibold  pt-28">
              Abijo Abrahams
            </span>
            <span className="flex text-slate-500 font-body text-xs font-normal ">
              Executive Governor, Seashore State
            </span>
          </div>
        </div>

        <div className="flex flex-row carousel-item justify-between  max-w-4xl  bg-lime-800 rounded-xl p-4">
          <div className="m-3">
            <img src="story2.png" alt="story2" className="max-w-xs" />
          </div>
          <div className="flex flex-col my-5 ">
            <img src="star.png" alt="star" className="size-12 -mt-5" />
            <span className="text-slate-900 font-sans text-3xl  font-normal leading-8">
              As a fast-growing <br /> NGO, we needed an efficient way to find
              skilled professional volunteers from various regions. This tool
              exceeded our expectations."
            </span>
            <span className="flex text-slate-900 font-body font-semibold  pt-10">
              Sarah Ubong
            </span>
            <span className="flex text-slate-500 font-body text-xs font-normal ">
              Founder, Sarah's Bosom
            </span>
          </div>
        </div>

        <div className="flex flex-row carousel-item justify-between  max-w-4xl  bg-purple-950 rounded-xl p-4">
          <div className="m-3">
            <img src="story2.png" alt="story2" className="max-w-xs" />
          </div>
          <div className="flex flex-col my-5 ">
            <img src="star.png" alt="star" className="size-12 -mt-5" />
            <span className="text-slate-900 font-sans text-3xl  font-normal leading-8">
              As a fast-growing <br /> NGO, we needed an efficient way to find
              skilled professional volunteers from various regions. This tool
              exceeded our expectations."
            </span>
            <span className="flex text-slate-900 font-body font-semibold  pt-10">
              Sarah Ubong
            </span>
            <span className="flex text-slate-500 font-body text-xs font-normal ">
              Founder, Sarah's Bosom
            </span>
          </div>
        </div>
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

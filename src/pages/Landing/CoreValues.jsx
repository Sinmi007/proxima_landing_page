import React from "react";

const CoreValues = () => {
  return (
    <div className="flex flex-col  bg-white items-center justify-center gap-x-10 p-20 w-full ">
      <div className="flex  flex-col mr-5">
        <div className="flex justify-center items-center  pb-10 ml-6 ">
          <span className=" bg-white text-black font-sora font-medium  text-4xl  leading-tight ">
            Our Core Values
          </span>
        </div>
        <div className="flex flex-col  md:flex-row  space-x-8">
          <div className="flex ml-8 mb-2 bg-lime-400 flex-col space-y-8 max-w-72  max-h-80 justify-center rounded-3xl p-6">
            <div className="flex size-12 ">
              <img src="innovate.png" alt="innovate" />
            </div>
            <div className="flex flex-col ">
              <div className="flex py-4">
                <span className="text-black font-body text-xl font-semibold leading-tight">
                  Innovative
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-black font-body text-xs  font-medium">
                  We are focused to improving access to financial services and
                  creating social impact through new technologies, community
                  partnerships and policy advocacy.
                </span>
              </div>
            </div>
          </div>

          <div className="flex mb-2 bg-lime-400 flex-col space-y-8 max-w-72  max-h-80 justify-center rounded-3xl p-6">
            <div className="flex size-12 ">
              <img src="people.png" alt="people" />
            </div>
            <div className="flex flex-col ">
              <div className="flex py-4">
                <span className="text-black font-body text-xl font-semibold leading-tight">
                  People-first
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-black font-body text-xs  font-medium">
                  We work closely with partners to ensure every aspect of the
                  design process is focused on the user, resulting in increased
                  engagement, satisfaction, and loyalty.
                </span>
              </div>
            </div>
          </div>

          <div className="flex mb-2 bg-lime-400 flex-col space-y-8 max-w-72 max-h-80 justify-center rounded-3xl p-6">
            <div className="flex size-12 ">
              <img src="sustainability.png" alt="sustainability" />
            </div>
            <div className="flex flex-col ">
              <div className="flex py-4">
                <span className="text-black font-body text-xl font-semibold leading-tight">
                  Sustainability
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-black font-body text-xs  font-medium">
                  We implement sustainable solutions in decision making with an
                  ultimate goal of creating a more equitable and promising
                  future for everyone.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

import React from 'react'

const Metrics = () => {
  return (
    <div className="flex flex-col bg-gray-100 items-center justify-center p-8">
      <button
        className="btn  btn-xs bg-lime-400 items-center justify-center hover:bg-violet-500  hover:outline-none text-black text-xs border-transparent 
      rounded-lg font-body  "
      >
        Metrics
      </button>

      <div className="flex text-black font-poppins font-semibold text-2xl leading-tight pb-0 pt-3 md:text-4xl md:leading-10 ">
        Proximaforte in Numbers
      </div>

      <div
        className="flex flex-col md:flex-row justify-center items-center text-slate-900 
       font-body lg:stats-horizontal  p-2 md:p-8"
      >
        <div className="flex flex-col justify-center items-center px-20 py-4 md:py-0">
          <div className="flex text-black text-6xl font-semibold">250+</div>
          <div className="flex text-xs font-sans  font-medium p-2">
            Active onboarding centre
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-20 py-4 md:py-0">
          <div className="flex text-black text-6xl font-semibold">5M</div>
          <div className="flex text-xs font-sans  font-medium p-2">
            Social welfare cards distributed
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-20 py-4 md:py-0">
          <div className="flex text-black text-6xl font-semibold">150</div>
          <div className="flex text-xs font-sans font-medium p-2">Employees</div>
        </div>
      </div>
    </div>
  );
}

export default Metrics
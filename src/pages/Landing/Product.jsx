import React from 'react'

const Product = () => {
  return (
    <div className="flex flex-col bg-white items-center justify-center p-16">
      <button
        className="btn  btn-xs bg-lime-400 hover:bg-violet-500 hover:outline-none text-black text-xs border-transparent 
      rounded-lg font-body  "
      >
        Product
      </button>

      <div className="flex text-black font-body text-4xl font-semibold leading-tight p-4 ">
        Introducing Optima
      </div>

      <div className="flex max-w-2xl leading-tight  text-slate-700 text-center text-md font-body pb-8">
        Transforming Data Management for Social Welfare.
      </div>

      {/* Optima */}
      <div className="flex flex-col bg-gray-100 justify-center items-center rounded-3xl">
        <div className="flex leading-tight p-4 ">
          <img src="optimaLogo.png" alt="optimaLogo" className='h-14' />
        </div>
        <div className="flex max-w-4xl leading-tight  text-slate-700 text-center text-md font-body">
          Optima is Proximaforte's flagship application, designed to
          revolutionize data management for social welfare programs. It captures
          and manages citizen data efficiently, ensuring high security and
          usability.
        </div>
        <div className='p-8'>
          <button
            className="btn  btn-sm bg-transparent hover:bg-lime-400  text-slate-700 text-xs border-gray-300 
      rounded-full font-body w-32 "
          >
            Learn more
          </button>
        </div>
        <div>
          <img src="fade2.png" alt="fade2" />
        </div>
      </div>
    </div>
  );
}

export default Product
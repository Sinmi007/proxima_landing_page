import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col bg-white items-center justify-center    pb-10">
      <button
        className="btn  btn-xs bg-lime-400 hover:bg-violet-500 hover:outline-none text-black text-xs border-transparent 
      rounded-lg font-body"
      >
        Services
      </button>

      <div className="flex text-black font-body text-4xl font-semibold leading-tight p-4 ">
        What we do.
      </div>

      <div className="flex max-w-2xl leading-tight  text-slate-700 text-center text-md font-body  ">
        From data management to welfare disbursement, we provide reliable and
        user-friendly management solutions that you can trust implicitly.
      </div>

      {/* What we do 1 */}
      <div className="flex flex-col  md:flex-row justify-center pt-16 space-x-8">
        <div className="bg-gray-100 size-sm max-w-96 ml-8 mb-4 rounded-xl p-6">
          <img src="svg1.png" alt="svg" />

          <div className="flex text-slate-900 font-body font-semibold pt-8">
            Data Management
          </div>

          <div className="text-slate-900 font-body text-xs  font-medium pt-4">
            We offer Data Management services to safeguard welfare data quality
            and integrity, mitigate risks, and deliver reliable information...
            <a href="#" className="text-violet-500 underline">
              learn more
            </a>
          </div>
        </div>

        <div className="bg-gray-100 size-sm max-w-96  rounded-xl p-6">
          <img src="container.png" alt="container" className="top-10" />

          <div className="flex text-slate-900 font-body font-semibold py-4">
            Fintech Infrastructure
          </div>

          <div className="text-slate-900 font-body text-xs  font-medium">
            We deliver fintech solutions, including digital banking
            infrastructure tailored for banks, insurance companies, and lending
            institutions...
            <a href="#" className="text-violet-500 underline">
              learn more
            </a>
          </div>
        </div>
      </div>

      {/* What we do 2 */}
      <div className="flex  flex-col  md:flex-row justify-center  p-2 ">
        <div className="size-96 max-w-96 rounded-xl p-6">
          <img src="container3.png" alt="container3" className="" />

          <div className="flex text-slate-900 font-body font-semibold py-4">
            Payroll Services
          </div>

          <div className="text-slate-900 font-body text-xs  font-medium">
            We offer public and private companies efficient payroll services
            that guarantee accuracy, compliance, and prompt payouts, freeing
            time to concentrate on the main business functions.
            <a href="#" className="text-violet-500 underline">
              learn more
            </a>
          </div>
        </div>

        <div className="size-96 max-w-96 rounded-xl p-6">
          <img src="illustration.png" alt="illustration" className="" />

          <div className="flex text-slate-900 font-body font-semibold py-4">
            Payment Disbursement
          </div>

          <div className="text-slate-900 font-body text-xs  font-medium">
            We offer welfare disbursement services with flexible options to
            allocate vital funds with utmost efficiency.
            <a href="#" className="text-violet-500 underline">
              learn more
            </a>
          </div>
        </div>

        <div className="size-96 max-w-96 rounded-xl p-6">
          <img src="container1.png" alt="container1" className="" />

          <div className="flex text-slate-900 font-body font-semibold py-4">
            Identity Card Management
          </div>

          <div className="text-slate-900 font-body text-xs  font-medium">
            Our identity Card Management service makes use of cutting edge
            technology to give beneficiaries a safe and convenient way to get
            government services and receive payments.
            <a href="#" className="text-violet-500 underline">
              learn more
            </a>
          </div>
        </div>

        {/* <div className="size-96 max-w-96 rounded-xl p-6">
          <img src="illustration1.png" alt="illustration1" className="" />

          <div className="flex text-slate-900 font-body font-semibold py-4">
            General IT Consultancy
          </div>

          <div className="text-slate-900 font-body text-xs  font-medium">
            OFor anyone to start building their real estate portfolio, no matter
            the size of your wallet. Learn more
            <a href="#" className="text-violet-500 underline">
              learn more
            </a>
          </div>
        </div>  */}
      </div>
    </div>
  );
};

export default Services;

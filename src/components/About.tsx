import React from "react";

export default function About() {
  return (
    <section style={{
      backgroundSize:'100% 100%',
    }} className=" bg-[url('/next-img.png')] bg-cover min-h-[400px] lg:aspect-[1566/874] relative text-[#111633] flex flex-col lg:flex-row items-end justify-end">
      <div className="flex flex-col lg:flex-row items-center w-full">
        {/* Left Image */}
        <div className="w-full lg:w-1/3 flex items-end absolute -bottom-32 left-0 ">
          <img
            src="/beautiful-bottle.png"
            alt=""
            className=" hidden lg:block h-[90%]"
          />
        </div>

        {/* Middle Section with Text */}
        <div className="w-full lg:w-1/3 relative flex flex-col items-center justify-center mx-auto ">
          <div className="text-center text-white z-10 px-4 py-12">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium font-Roboto-condensed leading-8 md:leading-10 text-[#111633] text-nowrap mb-4">
              About Us
            </h1>
            <p className="text-sm md:text-lg lg:text-xl font-medium text-[#3F3F3F] mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using
            </p>
            <button className="px-3 md:px-4 py-2 bg-[#111633] text-[#E3E3E3] font-semibold rounded">
              Read More
            </button>
          </div>
         
        </div>

        {/* Right Image */}
        {/* <div className="w-full lg:w-1/3 absolute -bottom-0 right-0 max-h-[50%]"> */}
          <img
            src="/girl.png"
            alt=""
            className=" hidden lg:block h-full bottom-0 right-0 absolute max-h-[75%] "
          />
        {/* </div> */}
      </div>
    </section>
  );
}

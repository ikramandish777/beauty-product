import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AntingCream() {
  return (
    <section>
      <div className="grid grid-col-1 lg:grid-cols-2 items-center lg:gap-10 gap-3 ">
        <div>
          <img src="/anti-aging-cream.png" alt="" />
        </div>
        <div className="flex flex-col items-center py-3 gap-3 lg:gap-10 px-5 lg:px-0 lg:pr-10">
          <div>
            {" "}
            <h1 className="text-4xl md:text-[64px] leading-[75px] font-medium text-[#111633] font-Roboto-Condensed">
              Anti-Aging Cream
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-5 text-xl font-Roboto font-medium leading-7 text-[#666666]">
            {" "}
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem ipsum is that it has a more-or-less
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of{" "}
            </p>
          </div>
          <div>
            {" "}
            <button className="flex gap-2 font-Robot-condensed font-medium text-[28px] text-white px-5 rounded-[10px] py-1.5 bg-[#111633]  items-center justify-center">
              Read More
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

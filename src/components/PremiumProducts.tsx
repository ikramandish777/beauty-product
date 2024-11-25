import React from "react";

export default function PremiumProducts() {
  return (
    <section
      className="relative bg-cover bg-center aspect-[1440/720] text-[#111633] flex flex-col justify-between p-10"
      style={{ backgroundImage: `url('/Premium-Products.png')` }}
    >
      <div className="w-1/2 flex flex-col gap-5">
        <div className="">
          <p className="text-2xl pl-20 md:text-4xl leading-9 font-normal lg:pl-32">
            Premium{" "}
          </p>
          <span className="text-4xl md:text-[64px] leading-[75px] text-nowrap font-normal text-[#111633] font-Roboto-Condensed">
            {" "}
            Quality Products
          </span>
        </div>
        <div>
          <p className="flex text-center pl-5  gap-5 text-2xl font-Roboto font-medium leading-7 text-[#3F3F3F]">
            It is a long established fact that a <br /> reader will be
            distracted by the <br /> readable content of a page like <br />{" "}
            readable English
          </p>
        </div>
        <div>
          <h1
           className="font-normal text-4xl lg:pl-20 text-nowrap">
           {` Whats's in it?`}
          </h1>
        </div>
        <div className="flex items-center  gap-12">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src="/Loevera.png" alt="" />
            <p className="text-[#414141] font-medium text-2xl">Aloe Vera</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img src="/flower.png" alt="" />
            <p className="text-[#414141] font-medium text-2xl">Organic</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img src="/bottle.png" alt="" />
            <p className="text-[#414141] font-medium text-2xl">
              Jojoba Extract
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

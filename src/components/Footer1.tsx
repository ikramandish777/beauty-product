import React from 'react';

export default function Footer1() {
  return (
    <section className="bg-gradient-to-r from-[#A0ADCD] to-[#D4DCF0] mt-20">
      <div className="py-10 px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        
          <div className="text-center md:text-left">
            <h1 className="font-bold text-xl lg:text-4xl text-[#111633] leading-8">Explore</h1>
            <ul className="flex flex-col text-[#3D3D3D] text-base lg:text-xl font-poppins font-medium leading-8 my-5">
              <li>Home</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Services</li>
            </ul>
          </div>

        
          <div className="text-center md:text-left">
            <h1 className="font-bold text-xl lg:text-4xl text-[#111633] leading-8">About us</h1>
            <ul className="flex flex-col text-[#3D3D3D] text-base lg:text-xl font-poppins font-medium leading-8 my-5">
              <li>(456) 789-12301</li>
              <li>info@modrino.co.uk</li>
              <li>South 13th Street</li>
              <li>New York, America</li>
            </ul>
          </div>

        
          <div className="text-center md:col-span-2 lg:col-auto  flex  flex-col justify-center items-center">
            <h1 className="font-bold text-xl lg:text-4xl text-[#111633] leading-8">Recent News</h1>
            <div className="flex gap-3 mt-5  items-center ">
              <img src="/Footer-image.png" alt="" className="w-[80px] h-[50px]" />
              <div>
                <p className="font-normal text-sm lg:text-base text-[#111633]">June 14 2024</p>
                <h1 className="text-sm lg:text-lg font-medium text-[#111633]">Anti-Aging Cream</h1>
              </div>
            </div>
            <div className="flex gap-3 mt-2 items-center ">
              <img src="/night-cream.png" alt="" className="w-[80px] h-[55px]" />
              <div>
                <p className="font-normal text-sm lg:text-base text-[#111633]">June 14 2024</p>
                <h1 className="text-sm lg:text-lg font-medium text-[#111633]">Anti-Night Cream</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#737373] text-sm lg:text-base font-inter font-normal text-center pb-5">
        @2024 Back House. All Rights Reserved
      </p>
    </section>
  );
}

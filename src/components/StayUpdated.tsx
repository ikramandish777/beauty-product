import React from "react";

export default function StayUpdated() {
  return (
    <section className="flex flex-col md:flex-row items-center my-10 justify-between bg-white p-6 md:p-10 ">
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl md:text-4xl font-medium text-[#111633] mb-2">
            Stay Updated
          </h2>
          <p className="text-lg md:text-2xlg text-[#3F3F3F] leading-6">
            Subscribe to our newsletter for the latest news and blogs.
            <br /> Stay tuned for important updates and information.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-0 mt-5 md:mt-0">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="w-full md:w-auto px-4 py-2 bg-[#efefef] focus:outline-none "
            />
            <button className="w-full md:w-auto bg-[#111633] text-white px-6 py-2 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1  mt-5 md:mt-0 flex justify-center md:justify-end">
        <img
          src="/beauty-cream.png"
          alt="Product Image"
          className="object-contain"
        />
      </div>
    </section>
  );
}

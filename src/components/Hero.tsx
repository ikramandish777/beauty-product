// components/HeroSection.js
export default function Hero() {
    return (
      <section className="text-gray-900 flex flex-col justify-center items-start px-8 lg:px-16 h-[500px] lg:h-[700px]">
        <h1 className="text-7xl  font-semibold leading-snug">
          Enhance <br />  <span className="">your Natural <br /> Radiance</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover beauty products that bring out your best self.
        </p>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg text-lg hover:bg-blue-700">
          Order Now
        </button>
      </section>
    );
  }
  
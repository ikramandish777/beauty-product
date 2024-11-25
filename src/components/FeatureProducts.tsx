import React from "react";

export default function FeatureProducts() {
  const products = [
    {
      title: "Sun Creams",
      img: "/whiteWash.png",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    },
    {
      title: "Anti-Aging Creams",
      img: "/whiteWash2.png",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    },
    {
      title: "Night Creams",
      img: "/nightCream.png",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    },
    {
      title: "Hydrating Creams",
      img: "/hydratingCream.png",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    },
    {
      title: "Brightening Creams",
      img: "/brightningCream.png",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    },
    {
      title: "Soothing Creams",
      img: "/soothingCream.png",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    },
  ];

  return (
    <section className="px-8 md:px-12 lg:px-16 py-10 bg-white">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
        Our Featured Products
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex gap-4 items-start">
            <img
              src={product.img}
              alt={product.title}
              className="w-36 h-32 object-cover rounded-md shadow-lg"
            />
            <div>
              <h3 className="text-[28px] leading-8 text-[#111633] font-medium font-Roboto mb-2">{product.title}</h3>
              <p className="text-xl font-Roboto font-medium leading-7 text-[#666666]">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

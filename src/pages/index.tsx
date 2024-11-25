import About from "@/components/About";
import AntingCream from "@/components/AntingCream";
import FeatureProducts from "@/components/FeatureProducts";

import Footer1 from "@/components/Footer1";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PremiumProducts from "@/components/PremiumProducts";
import SpecialOffer from "@/components/SpecialOffer";
import StayUpdated from "@/components/StayUpdated";
import React from "react";

export default function index() {
  return (
    <div>
      <div
        className="relative min-h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/hero-bg.png')", // Adjust this path as needed
          backgroundPosition: "center top", // Aligns the image based on Figma design
        }}
      >
        <Header />
        <Hero />
      </div>
      <FeatureProducts />
      <SpecialOffer />
      <AntingCream />
      <PremiumProducts />
      <StayUpdated />
      <About />
       <Footer1 />
      
    </div>
  );
}

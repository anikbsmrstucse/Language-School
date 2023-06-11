import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from "../../../assets/home_pages_images/slider1.png";
import banner2 from "../../../assets/home_pages_images/slider2.png";

const Banner = () => {
  return (
    <Carousel className="text-center">
      <div className="bg-[#F4F6FC] relative">
        <img className="w-full" src={banner1} />
        <div className="absolute top-1/4 text-left ml-10 space-y-3 md:space-y-10">
          <p className="text-xl md:text-4xl lg:text-6xl font-bold">Learn a language <br /> within 30 days...</p>
          <p className="text-[8px] md:text-base">Speak in your preferred language...</p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline">Find A language</button>
        </div>
      </div>
      <div className="bg-[#F4F6FC] relative">
        <img className="w-full" src={banner2} />
        <div className="absolute top-1/4 text-left ml-10 space-y-3 md:space-y-10">
          <p className="text-xl md:text-4xl lg:text-6xl font-bold">Speak a language <br /> in 10 minutes a day</p>
          <p className="text-[8px] md:text-base">Join our global community of 90 million learners</p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline">Start Learning Online</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;

import React from "react";
import bgImg from "../../../assets/home/banner-1.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen flex justify-start items-center pl-11 text-white bg-black/60">
        <div>
          <div className="flex flex-col [&>*+*]:mt-4">
            <p className="md:text-4xl text-2xl">We Provide</p>
            <h2 className="md:text-7xl text-4xl font-bold">
              Safe and adaptive workouts
            </h2>
            <h2 className="md:text-7xl text-4xl font-bold">
              tailored to your recovery needs
            </h2>
            <div className="md:w-1/2">
              Regain your strength, restore your mobility, and rebuild your
              confidence — all from the comfort of your home. Our
              expert-designed programs adapt to your unique recovery journey,
              ensuring safe, effective, and empowering results.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button className="px-7 py-3 rounded-lg bg-lime-400 font-bold uppercase">
                Join Now
              </button>
              <button className="px-7 py-3 rounded-lg border font-bold uppercase">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

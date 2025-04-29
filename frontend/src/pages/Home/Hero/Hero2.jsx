import React from "react";
import bgImg from "../../../assets/home/banner-2.jpg";

const Hero2 = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen flex justify-start items-center pl-11 text-white bg-black/60">
        <div>
          <div className="flex flex-col [&>*+*]:mt-4">
            <p className="md:text-4xl text-2xl">Best Online</p>
            <h2 className="md:text-7xl text-4xl font-bold">
              Personalized Recovery Programs
            </h2>
            <h2 className="md:text-7xl text-4xl font-bold">
              Guided by Professionals
            </h2>
            <div className="md:w-1/2">
              Access evidence-based rehabilitation exercises designed by
              certified specialists, empowering you to recover safely and
              efficiently from the comfort of your home.
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
export default Hero2;

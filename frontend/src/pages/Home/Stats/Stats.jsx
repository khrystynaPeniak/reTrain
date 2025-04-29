import React from "react";

const Stats = () => {
  const statsData = [
    { value: "1M+", label: "Visitors" },
    { value: "500k+", label: "Users" },
    { value: "1k+", label: "experts" },
    { value: "80%", label: "Success Stories" },
  ];

  return (
    <div className="w-full bg-lime-400 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold mb-1 text-white">
                {stat.value}
              </h3>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

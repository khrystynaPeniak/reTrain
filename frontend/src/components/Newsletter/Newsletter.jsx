import React, { useState } from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-32 bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">
            Want us to email you with the latest news?
          </h2>
          <form className="max-w-md mx-auto">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l-md bg-gray-200 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-lime-400 hover:bg-lime-300 font-bold text-white px-4 py-2 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

import React from "react";

import blogImg1 from "../../../assets/blog/blog-1.jpg";
import blogImg2 from "../../../assets/blog/blog-2.jpg";
import blogImg3 from "../../../assets/blog/blog-3.jpg";
import blogImg4 from "../../../assets/blog/blog-4.jpg";

const Blog = () => {
  return (
    <div className="mx-auto my-28">
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-center dark:text-white">
          From Pain To Prograss
        </h2>
        <p className="text-center mt-4 text-gray-600">
          Inspiring transformations from those who refused to give up. Here is
          some content from our community.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3 aspect-square overflow-hidden">
            <img
              src={blogImg3}
              alt="Transformation story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 aspect-[2/1] overflow-hidden">
            <img
              src={blogImg2}
              alt="Transformation journey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3 aspect-[2/1] overflow-hidden">
            <img
              src={blogImg1}
              alt="Success story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 aspect-square overflow-hidden">
            <img
              src={blogImg4}
              alt="Personal achievement"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

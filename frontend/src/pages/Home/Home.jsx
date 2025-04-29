import React from "react";
import HeroContainer from "./Hero/HeroContainer";
import Blog from "./Blog/Blog";
import PopularPrograms from "./PopularPrograms/PopularPrograms";
import BestInstructors from "./BestInstructors/BestInstructors";
import Stats from "./Stats/Stats";

const Home = () => {
  return (
    <section>
      <HeroContainer />
      <div className="max-w-screen-xl mx-auto">
        <Blog />
        <PopularPrograms />
        <BestInstructors />
        <Stats />
      </div>
    </section>
  );
};

export default Home;

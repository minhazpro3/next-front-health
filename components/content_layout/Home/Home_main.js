import React from "react";
import Banner from "./Banner";
import Home_about from "./Home_about";
import Home_workout from "./Home_workout";
import Our_perform from "./Our_perform";

const Home_main = () => {
  return (
    <div className="  container mx-auto px-6 md:px-0">
      <Banner />
      <Home_about />
      <Our_perform />
      <Home_workout />
    </div>
  );
};

export default Home_main;

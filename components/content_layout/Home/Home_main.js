import React from "react";
import Banner from "./Banner";
import Home_about from "./Home_about";

const Home_main = () => {
  return (
    <div className=" mx-4 container md:mx-auto  ">
      <Banner />
      <Home_about />
    </div>
  );
};

export default Home_main;

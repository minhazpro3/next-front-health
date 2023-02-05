import React from "react";

const Home_about = () => {
  return (
    <div className="container mx-auto">
      <div className="md:grid md:grid-cols-2 items-center ">
        <h2 className="text-3xl md:text-5xl font-grotesque font-normal leading-[140%] md:leading-[4.5rem] md:w-[568px] md:h-[150px] opacity-70">
          Healthy in side <br /> fresh out side
        </h2>
        <p className="text-xs md:text-base font-normal font-poppins leading-[180%] md:leading-7  tracking-[0.01em] opacity-50  break-all md:break-none mr-6 md:mr-0 ">
          {" "}
          Experience is very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home. Healthy life makes you more
          excited to live the day.
        </p>
      </div>
    </div>
  );
};

export default Home_about;

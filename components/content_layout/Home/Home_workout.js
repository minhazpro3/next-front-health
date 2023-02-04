import Image from "next/image";
import React from "react";
import workout from "../../../public/images/image 78.png";
import wave from "../../../public/images/Vector 34.png";

const Home_workout = () => {
  return (
    <div className=" my-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="relative h-[500px] flex justify-center ">
          <div className="bg-[#DBDFFF] rounded-full absolute top-12 w-[300px] h-[300px] right-20"></div>
          <div className="bg-[#D697DE] rounded-full ml-6 bottom-2 absolute w-[300px] h-[300px] left-16"></div>
          <div className="absolute right-[70px] top-6">
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
            <Image
              className="relative"
              src={wave}
              width={300}
              height={0.2}
              alt="border"
            />
          </div>

          <div className=" ">
            <Image
              className="relative"
              src={workout}
              alt="workout image"
              width={415}
              height={496}
            />
          </div>
          <div className="absolute "></div>
        </div>

        <div>
          <h3>Best full body workout to lose fat</h3>
          <p>
            Experience is very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Home_workout;

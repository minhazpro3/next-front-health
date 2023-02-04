import Image from "next/image";
import React from "react";
import workout from "../../../public/images/image 78.png";
import wave from "../../../public/images/Vector 34.png";
import { BiBody } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { GiBodyBalance } from "react-icons/gi";
import { GiHalfBodyCrawling } from "react-icons/gi";

const Home_workout = () => {
  return (
    <div className="  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="md:order-last">
          <h3 className=" text-3xl md:text-5xl font-bold font-grotesque tracking-wide">
            Best full body workout to lose fat
          </h3>
          <p className="text-xs md:text-base font-poppins opacity-50 mt-4 md:mt-7">
            Experience is very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <button className=" hidden md:block mt-10 font-poppins shadow-2xl md:mt-16 text-base py-4 text-white md:flex items-center justify-around w-[246px] bg-[#264373] rounded-lg">
            Get started{" "}
            <span className="text-base">
              <HiOutlineArrowNarrowRight />
            </span>
          </button>
          <button className=" block md:hidden mt-10 font-poppins shadow-2xl md:mt-16 text-xs py-3 text-white flex items-center justify-around w-[176px] bg-[#264373] rounded-lg">
            Get started{" "}
            <span className="bg-white p-2 text-[#264373] rounded-full">
              <HiChevronRight />
            </span>
          </button>
        </div>

        <div className="relative h-300px   md:h-[500px] flex justify-center ">
          <div className="bg-[#DBDFFF] rounded-full absolute top-16   md:top-12 w-[150px] h-[150px] md:w-[300px] md:h-[300px] -right-1 md:right-20"></div>
          <div className="bg-[#D697DE] rounded-full md:ml-6 bottom-3 md:bottom-2 absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] -left-1 md:left-16"></div>
          <div className="absolute -right-2 md:right-[70px] top-10  md:top-20 ">
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem ">
              <Image src={wave} fill alt="border" />
            </div>
            <div className="relative  w-[116px] md:w-[300px] h-[10px] md:h-rem  ">
              <Image src={wave} fill alt="border" />
            </div>
          </div>

          <div className=" w-[240px] md:w-[415px] h-[286px] md:h-[496px]">
            <Image className="relative" src={workout} alt="workout image" />
          </div>

          <div className="absolute bottom-2 md:bottom-12 -left-4 md:left-6 bg-white px-7 shadow-2xl py-2 rounded-xl">
            <div>
              <div className="flex items-center gap-5">
                <h3 className="p-2 md:p-4 bg-gradient-to-r from-blue-700  rounded-full   to-blue-400   text-3xl text-white">
                  <BiBody />
                </h3>
                <h3 className="text-[9px] md:text-base font-bold font-poppins">
                  800 kall <br />
                  <span className=" text-[6px] md:text-xs font-poppins">
                    Burn fat
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute top-4 md:top-7 left-7 md:left-36 ">
            <h3 className=" text-3xl text-white bg-white bg-gradient-to-r from-fuchsia-400 to-fuchisia-50 p-2 md:p-3 rounded-full z-10 opacity-100">
              <GiBodyBalance />
            </h3>
          </div>
          <div className="absolute top-[40%] md:top-44 -right-5 md:right-7">
            <h3 className="text-3xl text-white bg-white bg-gradient-to-r from-blue-400 to-blue-50 p-2 md:p-3 rounded-full z-10 opacity-100">
              <GiHalfBodyCrawling />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_workout;

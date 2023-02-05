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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* workout section left */}
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

        {/* workout section right */}

        <div className="relative h-300px   md:h-[500px] flex justify-center ">
          {/* workout bg shape */}
          <div className="bg-[#DBDFFF] rounded-full absolute top-16   md:top-12 w-[150px] h-[150px] md:w-[300px] md:h-[300px] -right-1 md:right-20"></div>
          <div className="bg-[#D697DE] rounded-full md:ml-6 bottom-3 md:bottom-2 absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] -left-1 md:left-16"></div>

          {/* wave bg border */}
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

          {/* workout main image */}
          <div className=" w-[240px] md:w-[415px] h-[286px] md:h-[496px]">
            <Image className="relative" src={workout} alt="workout image" />
          </div>

          {/* workout left bottom card */}
          <div className="absolute bottom-2 md:bottom-12 w-[117px] h-[46px] md:w-[203px] md:h-[80px] -left-4 md:left-6 bg-white  shadow-2xl py-2 rounded-md">
            <div>
              <div className="flex items-center justify-center gap-3  ">
                <h3 className="p-2 md:p-4 bg-gradient-to-r from-indigo-500  rounded-full   to-indigo-200 text-xs   md:text-3xl text-white">
                  <BiBody />
                </h3>
                <div>
                  <h3 className="text-[9px] md:text-base font-poppins font-bold">
                    800 kall
                  </h3>
                  <p className="text-[7px] md:text-xs font-poppins font-bold opacity-50">
                    Burn fat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* work out left icon */}
          <div className="absolute top-4 md:top-7 left-7 md:left-36 ">
            <h3 className=" text-3xl text-white bg-white bg-gradient-to-r from-fuchsia-400 to-fuchisia-50 p-2 md:p-3 rounded-full z-10 opacity-100">
              <GiBodyBalance />
            </h3>
          </div>

          {/* workout right icon */}
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

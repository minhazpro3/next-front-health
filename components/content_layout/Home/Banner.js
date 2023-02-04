import Image from "next/image";
import React from "react";
import { BiBody } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { AiFillPlayCircle } from "react-icons/ai";
import { GiHalfBodyCrawling } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="pt-2">
      <div>
        <div>
          <h3 className="text-3xl font-grotesque tracking-wide">
            Health in side <br/> <span className="text-[#8382eb] ">fresh </span> out side{" "}
          </h3>
          <p className="text-xs opacity-50 font-poppins mt-4">
            Experience is very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 mt-10">
         <button className=" shadow-2xl    md:mt-16 text-xs py-2 font-poppins text-white flex items-center justify-around w-[176px] bg-[#264373] rounded-lg">
            Get started{" "}
            <span className="bg-white p-2 text-[#264373] rounded-full">
              <HiChevronRight />
            </span>
          </button>
         <button className=" shadow-2xl text-[#264373]   md:mt-16 text-xs py-2 px-2 font-poppins text-white flex items-center justify-center gap-1  w-[125px] bg-white rounded-lg">
            <span className="bg-[#264373] p-2 text-white rounded-full ">
              <AiFillPlayCircle />
            </span>
           Learn more{" "}
          </button>
          
        </div>
        <div>
          <h6>Brands:</h6>
          <div>
            <Image src="" width={50} height={50} alt="brand icon" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;

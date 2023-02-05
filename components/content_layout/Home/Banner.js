import Image from "next/image";
import React from "react";
import imgWorkout from "../../../public/images/image 77 (1).png";
import { TfiGallery } from "react-icons/tfi";
import { HiChevronRight } from "react-icons/hi";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import wave from "../../../public/images/Vector 34.png";
import shape from "../../../public/images/Vector 32.png";
import adidas from "../../../public/images/adidas.png";
import puma from "../../../public/images/puma.png";
import nike from "../../../public/images/nike.png";
import reebok from "../../../public/images/reebok.png";
import { GiHalfBodyCrawling } from "react-icons/gi";
import { GiBodyBalance } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center pt-12 md:pt-16  mb-24">
      {/* banner left section */}
      <div>
        <div>
          <h3 className="text-3xl md:text-[3.5rem] md:leading-[4.5rem] md:w-[568px] md:h-[150px] font-grotesque tracking-wide">
            Health in side <br />{" "}
            <span className="text-[#8382eb] ">fresh </span> out side{" "}
          </h3>
          <p className="text-xsmd:text-base opacity-50 font-poppins mt-4 md:w-[492px]">
            Experience is very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with friends at home. Healthy life makes you more
            excited to live the day.
          </p>
        </div>

        <div className="flex justify-center md:justify-start items-center gap-2 mt-5">
          <button className=" shadow-2xl      text-xs md:text-base py-2 font-poppins text-white flex items-center justify-around w-[176px] md:w-[246px] md:h-[56px] bg-[#264373] rounded-lg">
            Get started{" "}
            <span className="bg-white p-2 text-[#264373] rounded-full">
              <HiChevronRight />
            </span>
          </button>
          <button className=" shadow-2xl text-[#264373]     text-xs md:text-base py-2 px-2 font-poppins  flex items-center justify-center gap-1  w-[125px] md:w-[174px] md:h-[56px] bg-white rounded-lg">
            <span className="bg-[#264373] p-2 text-white rounded-full ">
              <AiFillPlayCircle />
            </span>
            Learn more{" "}
          </button>
        </div>

        {/* brands logo section */}
        <div className="mt-10 ">
          <h6 className="mb-6 text-xs md:text-base font-poppins">Brands:</h6>
          <div className="flex justify-around items-center gap-2 mb-16">
            <div className="relative w-[60px] h-[38px] md:h-[50px]">
              <Image src={nike} fill alt="brand logo" />
            </div>
            <div className="relative w-[60px] h-[38px] md:h-[50px]">
              <Image src={adidas} fill alt="brand logo" />
            </div>
            <div className="relative w-[60px] h-[38px] md:h-[50px]">
              <Image src={puma} fill alt="brand logo" />
            </div>
            <div className="relative w-[60px] h-[38px] md:h-[50px]">
              <Image src={reebok} fill alt="brand logo" />
            </div>
          </div>
        </div>
      </div>

      {/*banner right section */}

      <div className="relative h-[350px] md:h-[582px] flex justify-center">
        <div className="bg-[#DBDFFF] rounded-full absolute bottom-8 md:bottom-10 left-3 md:left-16 w-[200px]  h-[200px]  md:w-[350px] md:h-[350px]  "></div>

        {/* wave bg border */}
        <div className="absolute bottom-8 md:bottom-12 left-1 md:left-12">
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-rem ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
          <div className="relative  w-[116px] md:w-[300px] h-[8px] md:h-[13px] ">
            <Image src={wave} fill alt="border" />
          </div>
        </div>
        <div className="absolute right-4 md:right-28 bottom-2.5 md:bottom-0.5 ">
          <div className="relative  w-[250px] md:w-[428px] h-[190px] md:h-[324px] ">
            <Image src={shape} fill alt="border" />
          </div>
        </div>
        <div className=" ">
          <div className="relative  w-[210px]   md:w-[358px] h-[340px] md:h-[580px] ">
            <Image src={imgWorkout} fill alt="border" />
          </div>
        </div>

        {/* bottom left icon */}

        <div className="absolute bottom-10 md:bottom-24 -left-6 md:-left-1 ">
          <h3 className="text-xl md:text-3xl text-white bg-white bg-gradient-to-r from-indigo-400 to-indigo-50 p-3 md:p-4 rounded-full z-10 opacity-100">
            <GiHalfBodyCrawling />
          </h3>
        </div>

        {/* top right icon */}

        <div className="absolute right-0 md:right-24 top-16 md:top-28 ">
          <h3 className="text-xl md:text-3xl text-white bg-white bg-gradient-to-r from-blue-400 to-blue-50 p-3 md:p-4 rounded-full z-10 opacity-100">
            <GiBodyBalance />
          </h3>
        </div>

        {/* azqky simorang card right */}
        <div
          className="absolute -right-4 md:right-7 rounded md:rounded-md bottom-8 md:bottom-10 bg-white py-3 md:py-5 shadow-2xl w-[110px] md:w-[188px] h-[92px] 
        md:h-[158px]"
        >
          <div className="flex justify-center">
            <div>
              <h3 className=" text-xs md:text-3xl p-3 bg-[#6765F0]  text-white rounded-full">
                <TfiGallery />
              </h3>
            </div>
          </div>
          <div className="text-center mt-1.5 md:mt-3">
            <h3 className="text-[10px] md:text-base font-poppins font-bold">
              Zaqky Simorang
            </h3>
            <p className="text-[7px] md:mt-1 md:text-xs opacity-50 font-poppins  ">
              Trainer
            </p>
          </div>
        </div>

        {/* total members */}

        <div className="absolute w-[109px] md:w-[187px] h-[46px] md:h-[80px] -left-6 md:-left-1 top-10 md:top-20 bg-white px-0 shadow-2xl py-2 rounded-md">
          <div>
            <div className="flex items-center justify-center gap-3  ">
              <h3 className="p-2 md:p-4 bg-gradient-to-r from-amber-500  rounded-full   to-amber-200 text-xs   md:text-3xl text-white">
                <BiBody />
              </h3>
              <div>
                <h3 className="text-[9px] md:text-base font-poppins font-bold">
                  150+
                </h3>
                <p className="text-[7px] md:text-xs font-poppins font-bold opacity-50">
                  members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

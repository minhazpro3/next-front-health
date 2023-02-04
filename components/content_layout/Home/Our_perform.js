import React from "react";
import { BiBody } from "react-icons/bi";
import { HiArrowSmRight } from "react-icons/hi";
import { GiBodyBalance } from "react-icons/gi";
import { GiHalfBodyCrawling } from "react-icons/gi";

const Our_perform = () => {
  return (
    <div className="my-16">
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-[2rem]  px-2 py-8 md:px-20 md:py-20 mt-28   ">
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-3 md:gap-5   content-center">
          {/* card 1 */}
          <div className="flex justify-center ">
            <div className="flex items-center gap-4 ">
              <h3 className="text-base md:text-4xl bg-[#8987f2] text-white p-5 rounded-[20px]">
                <BiBody />
              </h3>
              <div>
                <h4 className="text-base md:text-xl font-bold text-white font-poppins">
                  Get that 11 line <br /> in 30 days
                </h4>
                <button className="flex items-center gap-5 text-white opacity-50 mt-2 ">
                  Learn more <HiArrowSmRight />
                </button>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex justify-center ">
            <div className="flex items-center gap-4 ">
              <h3 className="text-base md:text-4xl bg-[#8987f2] text-white p-5 rounded-[20px]">
                <GiBodyBalance />
              </h3>
              <div>
                <h4 className="text-base md:text-xl font-bold text-white font-poppins">
                  14 Days <br /> sherd challenge
                </h4>
                <button className="flex items-center gap-5 text-white opacity-50 mt-2 ">
                  Learn more <HiArrowSmRight />
                </button>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex justify-center ">
            <div className="flex items-center gap-4 ">
              <h3 className="text-base md:text-4xl bg-[#8987f2] text-white p-5 rounded-[20px]">
                <GiHalfBodyCrawling />
              </h3>
              <div>
                <h4 className="text-base md:text-xl font-bold text-white font-poppins">
                  Get flat belly <br /> in 30 days
                </h4>
                <button className="flex items-center gap-5 text-white opacity-50 mt-2 ">
                  Learn more <HiArrowSmRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_perform;

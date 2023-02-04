import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <h3>
            Health is side <span>fresh </span> out side{" "}
          </h3>
          {/* <p>
            Experience is very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. 
          </p> */}
        </div>
        <div>
          <button>Get started </button>
          <button>Learn more </button>
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

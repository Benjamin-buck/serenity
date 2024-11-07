import React from "react";
import Button from "./Button";
import { MdRequestQuote } from "react-icons/md";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[82vh]">
      <div className="container mx-auto max-md:px-6 flex max-lg:flex-col-reverse">
        <div className="w-[50%] max-lg:w-full  h-[78vh] max-lg:h-auto max-lg:py-10 flex items-center justify-center">
          <div className="space-y-3">
            <h2 className="text-6xl max-md:text-4xl font-bold">
              Give your home or <br />
              Business a <span>makeover</span>.
            </h2>
            <p>
              Elevate your curb appeal with expert landscaping design,
              maintenance, and care. From lush lawns to stunning garden
              features, we bring your vision to life with precision and passion.
            </p>
            <Button>
              <MdRequestQuote className="text-xl" /> Get a Free Quote Today!
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center max-lg:mt-6">
          <Image
            src="/photos.png"
            alt="landscape photos"
            className="scale-120 max-lg:scale-100 max-md:scale-75"
            height={377}
            width={487}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

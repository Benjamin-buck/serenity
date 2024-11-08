import React from "react";
import Button from "./Button";
import { MdRequestQuote } from "react-icons/md";
import Image from "next/image";
import { home } from "@/constants/data";

const Hero = () => {
  return (
    <div className="w-full h-[82vh]">
      <div className="container mx-auto max-md:px-6 flex max-lg:flex-col-reverse">
        <div className="w-[50%] max-lg:w-full  h-[78vh] max-lg:h-auto max-lg:py-10 flex items-center justify-center">
          <div className="space-y-3">
            <h2 className="text-6xl max-md:text-4xl font-bold">
              {home.heroText.heading}
              <span className="text-green-100">
                {" "}
                {home.heroText.coloredText}
              </span>
            </h2>
            <p className="font-instrumentSans text-lg">
              {home.heroText.description}
            </p>
            <Button>
              <MdRequestQuote className="text-xl" /> {home.buttonText}
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

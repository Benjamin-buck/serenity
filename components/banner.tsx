import { home } from "@/constants/data";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[300px] w-full border bg-[url('/bg.png')] bg-cover bg-center flex items-center justify-center max-lg:mt-[200px] max-md:text-center">
      <h2 className="text-white text-3xl font-instrumentSans font-bold max-md:px-6">
        {home.bannerText}
      </h2>
    </div>
  );
};

export default Banner;

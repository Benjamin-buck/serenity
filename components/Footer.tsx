import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full mx-auto container my-2 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" width={40} height={40} alt="logo" />
        <h1 className="text-black font-instrumentSans text-xl font-semibold">
          Serenity Landscaping
        </h1>
      </div>
      <p>
        Designed & Built by{" "}
        <a className="text-green-100 font-semibold">NexDev Inc.</a>
      </p>
    </div>
  );
};

export default Footer;

import React from "react";

const Progress = () => {
  return (
    <div className="-top-[60px] relative z-10 flex border shadow-md mx-[25%] max-lg:mx-[10%] py-7 rounded-md bg-white justify-around max-md:flex-col max-md:gap-10 max-md:mx-10 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-green-100">1+</h2>
        <h4 className="font-bold text-lg">Years of Experience</h4>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-green-100">100+</h2>
        <h4 className="font-bold text-lg">Satisfied Clients</h4>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-green-100">45+</h2>
        <h4 className="font-bold text-lg">Testimonials</h4>
      </div>
    </div>
  );
};

export default Progress;

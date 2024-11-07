import React, { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return (
    <button className="px-5 flex gap-2 items-center py-2 bg-green-100 text-white font-semibold rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-black hover:bg-black hover:text-white transition-all duration-200">
      {children}
    </button>
  );
};

export default Button;

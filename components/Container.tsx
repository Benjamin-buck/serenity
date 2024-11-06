import React, { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto container">{children}</div>;
};

export default Container;

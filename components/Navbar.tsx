import Image from "next/image";
import React from "react";
import Container from "./Container";
import { FaPhoneVolume } from "react-icons/fa6";
import { navigationLinks } from "@/constants/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center max-md:px-5">
          <div className="flex gap-2 items-center py-6">
            <Image src="/logo.svg" height={37} width={37} alt="logo icon" />
            <h1 className="max-md:text-xl text-3xl text-green-100 font-bold">
              Serenity <span className="text-black">Landscaping</span>
            </h1>
          </div>
          <button className="max-md:hidden px-5 flex gap-2 items-center py-2 bg-green-100 text-white font-semibold rounded-md hover:ring-2 hover:ring-offset-2 hover:ring-black hover:bg-black hover:text-white transition-all duration-200">
            <FaPhoneVolume /> 613.200.2938
          </button>
        </div>
      </Container>
      <div className="max-md:px-5 border-t flex justify-between border-b font-instrumentSans font-semibold text-lg py-3 border-gray-200">
        <div className="mx-auto container flex gap-5">
          {navigationLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-green-100 transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import React from "react";
import Container from "./Container";
import { FaPhoneVolume } from "react-icons/fa6";
import { navigationLinks, phoneNumber } from "@/constants/data";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
          <div className="max-md:hidden">
            <Button>
              <FaPhoneVolume /> {phoneNumber.buttonDisplay}
            </Button>
          </div>
          <div className="max-md:block hidden">
            <Link href={phoneNumber.href}>
              <Button>
                <FaPhoneVolume /> Call
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <div className="max-md:px-5 border-t flex justify-between border-b font-instrumentSans font-semibold text-lg py-3 border-gray-200">
        <div className="mx-auto container flex justify-between items-center">
          <div className="flex gap-5">
            {navigationLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`hover:text-green-100 transition-all duration-200 ${
                  pathname === href && "text-green-100"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center max-md:hidden">
            <p>Cornwall Ontario</p> <FaLocationDot className="text-green-100" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

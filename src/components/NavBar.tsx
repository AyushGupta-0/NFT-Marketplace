import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import logo from "@/assets/xrp-boys.svg";

// icons
import { LuSearch } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";

type Props = {};

const pageLinks = [
  { name: "Explore", link: "/" },
  { name: "Mint", link: "/" },
  { name: "Launchpad", link: "/" },
];

export default function NavBar({}: Props) {
  return (
    <nav className="flex flex-row items-center z-20 justify-between text-left text-xl px-6 md:px-10 py-7 bg-transparent text-white font-inter">
      {/* left side */}
      <Image src={logo} alt="logo" className=" w-32 md:w-auto" />

      {/* pages-links */}
      <div className=" hidden md:flex flex-row items-start justify-start gap-[35px]">
        {pageLinks.map((item, i) => {
          return (
            <Link href={item.link} key={i}>
              <h1 className=" hover:text-green-500">{item.name}</h1>
            </Link>
          );
        })}
      </div>

      {/* right side */}
      <div className="flex flex-row items-center justify-start md:gap-6 gap-3 text-base text-placeholder">
        {/* search input */}
        <div className=" relative ">
          <input
            placeholder="Search..."
            className=" hidden md:block rounded-lg bg-box box-border w-[25rem] py-3 pl-6  pr-9 focus:outline-none placeholder:text-gray-400"
          ></input>
          <LuSearch className=" h-6 w-6 shrink-0  md:absolute right-0 top-1/4  z-10  md:mx-2  text-green-500 " />
        </div>

        <div className="hidden md:flex gap-4">
          <button className=" text-black border-none py-3 px-4 bg-[transparent] rounded-lg [background:linear-gradient(90deg,_#78FFDF,_#1EBE5E)] font-semibold  ">
            Sign Up
          </button>
          <div className="rounded-lg flex flex-row py-3 px-0 items-center justify-start text-sm text-green">
            <div className="relative tracking-[-0.02em] leading-[21px] font-semibold">
              Sign In
            </div>
          </div>
        </div>
        {/* cart */}
        <RiShoppingCartLine className=" w-6 h-6 overflow-hidden shrink-0" />
        <CgMenuRightAlt className=" w-6 h-6 overflow-hidden shrink-0 md:hidden " />
      </div>
    </nav>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

// images
import logo from "@/assets/xrp-boys.svg";
import profile from "@/assets/profile-photo.png";

// icons
import { LuSearch } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";
import { Icons } from "../ui/Icons";

type Props = {};

const pageLinks = [
  { name: "Explore", link: "/explore" },
  { name: "Mint", link: "/" },
  { name: "Launchpad", link: "/" },
];
const imageStyle = {
  outerWidth: '5px',
  outerHeight: '5px',
  borderRadius: '50%',

  border: '1px solid #fff',
}

export default function NavBarSigned({}: Props) {
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
          <Icons.search className=" h-6 w-6 shrink-0  md:absolute right-0 top-1/4  z-10  md:mx-2 text-green-500 " />
        </div>

        <div className="hidden md:flex gap-4">
          <Button variant={"gradiend"}>1222 XRP</Button>
          <Image src={profile} alt="logo"  className=" w-10 "style={imageStyle}/>
          
        </div>
        {/* cart */}
        <Icons.shoppingCart className=" w-6 h-6 overflow-hidden shrink-0" />
        <Icons.options className=" w-6 h-6 overflow-hidden shrink-0 md:hidden " />
      </div>
    </nav>
  );
}
"use client";
import { FC, useState } from "react";
import Image from "next/image";

import authBg from "@/assets/ath-bg.png";
import logo from "@/assets/xrp-boys.svg";
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <main className="h-[100svh] w-full  flex flex-col md:flex-row bg-background">
      {/* left side */}
      <div className="relative  flex items-center justify-center w-1/2">
        <Image
          src={authBg}
          alt="authBg"
          className="  max-h-[8.563rem] md:max-h-screen object-cover"
        />
        <div className="text-white absolute">
          <Image src={logo} alt="logo" />
        </div>
      </div>

      {/* right auth side */}
      <div className="w-1/2"></div>
    </main>
  );
};
export default Page;

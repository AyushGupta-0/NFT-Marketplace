import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import { FC, ReactNode } from "react";
import heroBg from "@/assets/hero-bg.png";

interface layoutProps {
  children: ReactNode;
}

const layout = async ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col relative bg-background">
      <Image src={heroBg} alt="" className=" absolute" />
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default layout;

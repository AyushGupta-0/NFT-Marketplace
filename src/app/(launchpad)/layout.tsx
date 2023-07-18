import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import { FC, ReactNode } from "react";
import heroBg from "@/assets/hero-bg.png";
import LiveLaunches from "@/components/LiveLaunches";
import UpcomingProjects from "@/components/UpcomingProjects";

interface layoutProps {
  children: ReactNode;
}

const layout = async ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col relative bg-background">
      <NavBar />
      <main className="flex-1">{children}</main>
      <div className="pl-20 pb-4 pt-5">
        <h1 className=" leading-7 text-xl md:leading-9 md:text-2xl z-10  font-semibold gardient-color-green">
          Live Launches{" "}
        </h1>
      </div>
      <div className="pl-20">
        <LiveLaunches />
      </div>
      <div className="pl-20 pb-4 pt-12">
        <h1 className=" text-xl md:leading-9 md:text-2xl z-10  font-semibold gardient-color-green">
          Upcoming Projects{" "}
        </h1>
      </div>
      <div className="pl-20 pb-20">
        <UpcomingProjects />
      </div>
      <Footer />
    </div>
  );
};
export default layout;

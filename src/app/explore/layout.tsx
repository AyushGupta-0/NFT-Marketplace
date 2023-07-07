import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import { FC, ReactNode } from "react";
import heroBg from "@/assets/hero-bg.png";
import FiterSecttion from "@/components/fiter-secttion";
import ExploreItems from "@/components/explore-items";
import ExploreSubNavbar from "@/components/explore-sub-navbar";
import Footer from "@/components/layout/Footer";

interface layoutProps {
  children: ReactNode;
}

const layout = async ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col relative bg-background">
      <NavBar />
      <div className=" relative top-[1.5rem] left-[4.25rem] flex flex-row items-start justify-start gap-[2.5rem]">
        <FiterSecttion />
        <div className="flex flex-col items-start justify-start gap-[2rem]">
          <ExploreSubNavbar />
          <ExploreItems />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default layout;

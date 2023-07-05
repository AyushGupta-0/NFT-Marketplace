import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { FC, ReactNode } from "react";
import heroBg from "@/assets/hero-bg.png";
import FiterSecttion from "@/components/fiter-secttion";
import ExploreItems from "@/components/explore-items";
import ExploreSubNavbar from "@/components/explore-sub-navbar";

interface layoutProps {
  children: ReactNode;
}

const layout = async ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col relative bg-background">
      {/* <Image src={heroBg} alt="" className=" absolute" /> */}
      <NavBar />
      <div className=" relative top-[1.5rem] left-[4.25rem] flex flex-row items-start justify-start gap-[2.5rem]">
        <FiterSecttion />
        <div className="flex flex-col items-start justify-start gap-[2rem]">
          <ExploreSubNavbar />
          
          <ExploreItems />
        </div>
        </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default layout;
import NavBar from "@/components/layout/NavBarSigned";
import SideBar from "@/components/layout/SideBar";
import Image from "next/image";
import { FC, ReactNode } from "react";
import heroBg from "@/assets/hero-bg.png";
import Footer from "@/components/layout/Footer";
import EditProfile from "./components/editProfile";
import ProfileDisplay from "./components/ProfileDisplay";
import LatestCollection from "./components/latestCollection";
import Head from "next/head";

interface layoutProps {
  children: ReactNode;
}

const layout = async ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col relative bg-background">
      <NavBar />
      <SideBar />
      <ProfileDisplay />
      <EditProfile />
      <LatestCollection />
      <Footer />
    </div>
  );
};
export default layout;

"use client";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col  relative bg-background">
      {/* render bg only on home page */}
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
export default layout;

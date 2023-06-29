import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-red-600">
      <NavBar />
      <SideBar />
    </main>
  );
}

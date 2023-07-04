"use client";
import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/Icons";
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const router = useRouter();
  return (
    <main className="w-full h-full  flex flex-col justify-center md:items-center gap-4 px-6 mt-10 md:mt-0 ">
      <div className="flex flex-col gap-4 w-full max-w-[25.5rem] ">
        <h1 className="gardient-color-green text-[2rem] font-semibold">
          Connect Wallet or Sign Up
        </h1>

        {/* button container */}
        <div className="flex flex-col gap-[0.9rem] md:gap-4 ">
          <Button
            variant={"transparent"}
            className="bg-[#1DA1F2] gap-2 text-white"
          >
            <Icons.twitter className="h-6 w-6" />
            Continue with Twitter
          </Button>
          <Button
            variant={"transparent"}
            className="bg-[#5865F2]  gap-2 text-white"
          >
            <Icons.discord className="h-6 w-6" />
            Continue with Discord
          </Button>
          <Button
            // isLoading={true}
            variant={"transparent"}
            className="bg-box text-white gap-2"
          >
            <Icons.google className="h-6 w-6" />
            Continue with Google
          </Button>
        </div>

        {/* seperator */}
        <div className="flex items-center ">
          <div className="w-full h-[1px] bg-content_Grey" />
          <span className="text-content_Grey px-2">OR</span>
          <div className="w-full h-[1px] bg-content_Grey" />
        </div>

        {/* anonymous user*/}
        <div className=" flex flex-col gap-5">
          <Button className=" w-full">Continue with Xumm</Button>

          <h1 className="text-content_Grey">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/sign-in")}
              className="text-green ml-2 cursor-pointer"
            >
              Login here
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Page;

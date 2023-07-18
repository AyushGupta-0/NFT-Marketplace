"use client";
import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/ui/Icons";
import socket from "@/lib/socket";

import { QRCode } from "react-qrcode-logo";
import { isDesktop, isMobile } from "react-device-detect";
import logo from "@/assets/xrp-boys.svg";

interface pageProps {}

const makeapikey = async () => {};

const Page: FC<pageProps> = ({}) => {
  const [connectWallet, setConnectWallet] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const router = useRouter();

  const handleClick = () => {
    if (isDesktop) {
      fetch(
        `${process.env.NEXT_PUBLIC_SERVERURL}:${process.env.NEXT_PUBLIC_SERVERPORT}/api/auth/loginAccountWithXumm`
      )
        .then((res) => res.json())
        .then((data) => {
          socket.on("accountLoggedIn", (data) => {
            console.log(data);
          });
          setQrcode(data.url);
          setConnectWallet(true);
        });
    } else if (isMobile) {
      fetch(
        `${process.env.NEXT_PUBLIC_SERVERURL}:${process.env.NEXT_PUBLIC_SERVERPORT}/api/auth/loginAccountWithXumm`
      )
        .then((res) => res.json())
        .then((data) => {
          router.push(data.url);
        });
    }
  };
  return (
    <main className="w-full h-full  flex flex-col justify-center md:items-center gap-4 px-6 mt-10 md:mt-0 ">
      <div className="flex flex-col gap-4 w-full max-w-[25.5rem] ">
        <h1 className="gardient-color-green text-[2rem] font-semibold">
          Sign In
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
          <Button onClick={() => router.push("/passkeys")} className="gap-2">
            <Icons.key className=" h-6 w-6" />
            Continue with Passkeys
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
          <Button onClick={handleClick} className=" w-full">
            Continue with Xumm
          </Button>

          <h1 className="text-content_Grey">
            Don&apos;t have an account yet?{" "}
            <span
              onClick={() => router.push("/sign-up")}
              className="text-green ml-2 cursor-pointer"
            >
              Register here
            </span>
          </h1>
        </div>
      </div>

      {/* popup modal for qrcode */}
      {connectWallet && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex justify-end w-full">
              <Icons.X
                className="h-6 w-6 cursor-pointer text-white"
                onClick={() => setConnectWallet(!connectWallet)}
              />
            </div>
            {/* <img src="" alt="" /> */}
            <div className="pl-20 pb-8">
              <QRCode
                value={qrcode}
                quietZone={50}
                size={300}
                fgColor="blue"
                eyeColor={["green", "green", "green"]}
                qrStyle="dots"
                eyeRadius={[
                  [30, 30, 0, 30],
                  [30, 30, 30, 0],
                  [30, 0, 30, 30],
                ]}
              />
            </div>
            <h1 className=" pl-6 pr-6 tracking-[-0.02em] leading-7 text-xl md:leading-9 md:text-2xl z-10  font-semibold gardient-color-green">
              Scan this QR code with your Xumm app to connect your wallet{" "}
            </h1>
          </div>
        </div>
      )}
    </main>
  );
};
export default Page;

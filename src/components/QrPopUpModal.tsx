import { FC } from "react";
import { QRCode } from "react-qrcode-logo";

// images
import xummLogo from "@/assets/xumm-logo.png";
import playStore from "@/assets/play-store.png";
import appleStore from "@/assets/apple-store.png";
import Image from "next/image";
import { Icons } from "./ui/Icons";

interface QrPopUpModal {
  onClose: () => void;
}

const QrPopUpModal: FC<QrPopUpModal> = ({ onClose }) => {
  return (
    <main className="fixed inset-0 bg-dark bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg shadow-lg max-w-[19.5rem] md:max-w-[25.5rem] w-full">
        <div className="w-full px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">
          {/* top section */}
          <section className="flex w-full items-center">
            <div className=" flex items-center gap-2 mx-auto">
              <h1 className="text-xl md:text-2xl leading-9 gardient-color-green font-semibold ">
                Continue with
              </h1>
              <Image
                src={xummLogo}
                alt="xummLogo"
                className="max-w-[5.8rem] h-4"
              />
            </div>

            <Icons.X
              className="h-6 w-6 cursor-pointer text-white"
              onClick={onClose}
            />
          </section>
          {/* middle section */}
          <section className="">
            <QRCode
              // value={qrcode}
              quietZone={10}
              size={340}
              fgColor="blue"
              eyeColor={["green", "green", "green"]}
              qrStyle="dots"
              eyeRadius={[
                [30, 30, 0, 30],
                [30, 30, 30, 0],
                [30, 0, 30, 30],
              ]}
            />
          </section>
          {/* bottom section */}
          <section className=" flex flex-col items-center gap-3">
            <div className="flex items-center gap-1 ">
              <h1 className="text-base text-content_Grey">Download</h1>
              <Image
                src={xummLogo}
                alt="xummLogo"
                className="max-w-[4.7rem] h-3"
              />
            </div>
            <div className="flex gap-3 md:gap-4 items-center">
              <Image
                src={appleStore}
                alt="appleStore"
                className="max-w-[8.3rem] md:max-w-[10.75rem]"
              />
              <Image
                src={playStore}
                alt="playStore"
                className="max-w-[8.3rem] md:max-w-[10.75rem]"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default QrPopUpModal;

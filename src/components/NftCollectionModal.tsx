import React, { FC } from "react";
import Image from "next/image";

import demoNft from "@/assets/nft-demo-1.png";

interface NftCollectionModalProps {
  data: string;
}

const NftCollectionModal: FC<NftCollectionModalProps> = async ({ data }) => {
  console.log(data);
  return (
    <div className="h-[11.6rem] min-w-[11.5rem] rounded-lg relative text-white overflow-hidden">
      <Image src={demoNft} alt="nft" className="object-cover h-full w-full" />

      {/*  info */}
      <div className="absolute w-full px-3 gap-1 bottom-0">
        <h1 className="text-base font-medium ">Immersive Visions</h1>
        <div className="flex justify-between text-xs">
          <div>
            <h2 className="text-content_Grey">Floor</h2>
            <span>15 XRP</span>
          </div>
          <div>
            <h2 className="text-content_Grey">Volume</h2>
            <span>138,190 XRP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCollectionModal;

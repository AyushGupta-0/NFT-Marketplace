import React from "react";

// components
import HomeHeroBanner from "@/components/HomeHeroBanner";
import NftRanksNobelModal from "@/components/NftRanksNobelModal";
import NftNewsModal from "@/components/NftNewsModal";
import Slider from "@/components/Slider";

// icons
import { FiChevronRight } from "react-icons/fi";
import NftCollectionModal from "@/components/NftCollectionModal";

type Props = {};
const collectionNft = [
  {
    name: "Immersive Visions",
    src: "/assets/nft-demo-1.png",
  },
];

const trendingTime = ["1h", "6h", "12h", "1d"];

const ranking = ["1", "2", "3", "4", "5"];

export default function page({}: Props) {
  return (
    <main className=" pt-12 pb-24 pl-6 md:pl-[4.3rem] bg-background border-none flex flex-col gap-10 md:gap-14 text-white overflow-hidden "></main>
  );
}

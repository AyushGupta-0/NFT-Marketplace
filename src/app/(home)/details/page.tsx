import { Icons } from "@/components/ui/Icons";
import { FiChevronRight } from "react-icons/fi";
import NftCollectionModal from "@/components/NftCollectionModal";
import Image from "next/image";

type Props = {};



export default function page({}: Props) {
    return ( <div className="relative bg-dark w-full h-[115rem] overflow-hidden text-left text-[1rem] text-green font-inter">
      
    <div className="absolute top-[8rem] left-[4.25rem] flex flex-row items-start justify-start">
      <Image quality={80} width="0" height="0"
        className="relative w-[39.5rem] h-[37.5rem] object-cover"
        alt=""
        src="/rectangle-16@2x.png"
      />

      
      <div className="rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-box w-[42rem] h-[37.5rem] flex flex-col py-[2.88rem] px-[4rem] box-border items-start justify-start gap-[1.5rem]">
        <div className="self-stretch flex flex-row items-center justify-end gap-[0.75rem]">
          <div className="rounded-full bg-green flex flex-row p-[0.63rem] items-start justify-start">
            <Icons.favorites className="text-black"/>
          </div>
          <div className="rounded-full bg-green flex flex-row p-[0.63rem] items-start justify-start">
            
            <Icons.share className="text-black"/>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-8">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-center justify-start gap-2">
              <Image width="0" height="0"
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/projectname.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[1.5rem] font-semibold">
                Cosmic Journey
              </div>
            </div>
            {/* NFT NAME */}
            <div className="relative text-[2rem] tracking-[-0.02em] leading-[3rem] font-semibold gardient-color-green ">
              Immersive Visions{" "}
            </div>
            <div className="relative text-[1.25rem] tracking-[-0.02em] leading-[1.88rem] text-content">
              <span>{`Owned by `}</span>
              <span className="font-semibold text-green">14987B</span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[3rem] text-[1.25rem] text-white">
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              
              <Icons.eye />
              <div className="relative tracking-[-0.02em] leading-[1.88rem]">
                800 Views
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              
              <Icons.favorites />
              <div className="relative tracking-[-0.02em] leading-[1.88rem]">
                300 Favourites
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 text-content">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="relative tracking-[-0.02em] leading-6">
                Best Offer
              </div>
              <div className="flex flex-row items-end justify-start gap-[1.75rem] text-[3rem] text-white">
                <div className="relative tracking-[-0.02em] leading-[3rem] font-semibold">
                  119 XRP
                </div>
                <div className="relative text-[1.5rem] tracking-[-0.02em] leading-[2.25rem] text-content">
                  $50.67
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-4 text-black">
              <div className="rounded-lg [background:linear-gradient(90deg,_#78ffdf,_#1ebe5e)] flex flex-row py-[0.75rem] px-[2.5rem] items-center justify-start">
                <button className="relative tracking-[-0.02em] leading-[1.5rem] font-semibold">
                  Buy Now
                </button>
              </div>
              <div className="rounded-lg bg-gray-800 flex flex-row py-[0.75rem] px-[2.5rem] items-center justify-start text-green">
                <button className="relative tracking-[-0.02em] leading-[1.5rem] font-medium">
                  Make Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-[49.5rem] left-[4.25rem] flex flex-col items-start justify-start gap-[2.5rem] text-[1.25rem] text-white">
      {/* Description Details Section  */}
      <div className="flex flex-row items-start justify-start gap-[2.5rem] md:self-stretch md:w-auto md:flex-row">
        <div className="flex flex-col items-start justify-start gap-[2.5rem]">
          <div className="flex flex-col pt-[0rem] px-[0rem] pb-[1.5rem] items-start justify-start border-b-[1px] border-solid border-line">
            <div className="w-[32.5rem] flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <Icons.fileText  />
                <div className="relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
                  Descriptions
                </div>
              </div>
              <Icons.add className="h-6 w-6" />
            </div>
          </div>
          <div className="flex flex-col pt-[0rem] px-[0rem] pb-[1.5rem] items-start justify-start border-b-[1px] border-solid border-line">
            <div className="w-[32.5rem] flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <Icons.hexagon/>
                <div className="relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
                  Traits
                </div>
              </div>
              <Icons.add className="h-6 w-6" />
            </div>
          </div>
          <div className="box-border w-[32.5rem] flex flex-col pt-[0rem] px-[0rem] pb-[1.5rem] items-start justify-start border-b-[1px] border-solid border-line">
            <div className="w-[32.5rem] flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
      
                <Icons.fileBadge2/>
                <div className="relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
                  About
                </div>
              </div>
              <Icons.add className="h-6 w-6" />
            </div>
          </div>
          <div className="box-border w-[32.5rem] flex flex-col pt-[0rem] px-[0rem] pb-[1.5rem] items-start justify-start border-b-[1px] border-solid border-line">
            <div className="w-[32.5rem] flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
      
                <Icons.fileSpreadsheet/>
                <div className="relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
                  Details
                </div>
              </div>
              <Icons.add className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[2.5rem]">
          <div className="self-stretch flex flex-col pt-[0rem] px-[0rem] pb-[1.5rem] items-start justify-start border-b-[1px] border-solid border-line">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              
                <Icons.fileBarChart/>
                <div className="relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
                  Listing
                </div>
              </div>
              <Icons.add className="h-6 w-6" />
            </div>
          </div>
          <div className="box-border w-[46.5rem] flex flex-col pt-[0rem] px-[0rem] pb-[1.5rem] items-start justify-start border-b-[1px] border-solid border-line">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/offers.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
                  Offers
                </div>
              </div>
              <Icons.add className="h-6 w-6" />
            </div>
          </div>
          <div className="box-border w-[46.5rem] flex flex-col pt-[0rem] px-[0rem] pb-[1.5rem] items-start justify-start border-b-[1px] border-solid border-line">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
            
                <Icons.circleDot/>
                <div className="relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
                  Items Activity
                </div>
              </div>
              <Icons.add className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Price Graph Section  */} 

      <div className="flex flex-col items-start justify-start gap-[1.25rem]">
        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
          <Icons.lineChart/>
          <div className="relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
            Price History
          </div>
        </div>
        <div className="w-[81.5rem] flex flex-row items-center justify-start gap-[0.75rem] text-center text-[0.63rem] text-content">
          <div className="flex flex-row items-center justify-start gap-[0.5rem] text-white">
            <div className="relative tracking-[-0.02em] leading-[0.94rem] font-semibold [transform:_rotate(-90deg)] [transform-origin:0_0]">
              Volume (XRP)
            </div>
            <div className="flex flex-col items-center justify-start gap-[1.13rem] text-content">
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                160K
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                140K
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                120K
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                100K
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                90K
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                60K
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                30K
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                0
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.81rem] text-left">
            <div className="self-stretch flex-1 relative">
              <div className="absolute top-[0rem] left-[0rem] w-[74.13rem] h-[13.37rem] flex flex-col items-start justify-start gap-[1.88rem]">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <img
                className="absolute top-[0.11rem] left-[0rem] w-[74.16rem] h-[13.55rem]"
                alt=""
                src="/group-2.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 06
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 08
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 10
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 12
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 14
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 16
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 18
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 20
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 22
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 24
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 26
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 28
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                May 30
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                June 01
              </div>
              <div className="relative tracking-[-0.02em] leading-[0.94rem]">
                June 03
              </div>
            </div>
          </div>
          
        </div>
      </div>

       {/* More for this collection section  */}
       <section className=" pt-6 text-xl md:text-2xl font-semibold gap-4 flex flex-col">
        <div className="flex md:gap-96">
          <h1 className=" gardient-color-green ">More for this collection</h1>
          <div className="flex group text-base md:pl-80 text-green gap-2 items-center">
            <h2> See All Collections</h2>
            <FiChevronRight className="h-5 w-5  group-hover:translate-x-1" />
          </div>
        </div>
        <div className="flex gap-4 md:gap-10 overflow-x-scroll scrollbar-hide h-full">
          <NftCollectionModal data="" />
          <NftCollectionModal data="" />
          <NftCollectionModal data="" />
          <NftCollectionModal data="" />
          <NftCollectionModal data="" />
        </div>
      </section>
    </div>
    
  </div>);
}
//

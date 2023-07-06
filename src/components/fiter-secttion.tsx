import type { NextPage } from "next";
import { LuSearch } from "react-icons/lu";

const FiterSecttion: NextPage = () => {
  return (
    <div className=" flex flex-col items-start justify-start gap-[1.25rem] text-left text-[1.5rem] text-white font-inter">
      <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
        <img
          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/frame3.svg"
        />
        <div className="flex-1 relative tracking-[-0.02em] leading-[2.25rem] font-semibold">
          Filter
        </div>
      </div>
      <div className="hidden md:flex flex-col items-start justify-start gap-[2rem] text-[1.25rem]">
        <div className="flex flex-col items-start justify-start gap-[0.75rem]">
          <div className="w-[11.5rem] flex flex-row items-center justify-start gap-[0.5rem]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
              Collections
            </div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/frame4.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.75rem] text-[1rem]">
            {/* <div className="rounded-lg bg-box box-border w-[11.5rem] flex flex-row py-[0.5rem] px-[0.63rem] items-center justify-between text-[0.88rem] text-placeholder border-[1px] border-solid border-line">
              <div className="relative tracking-[-0.02em] leading-[1.31rem]">
                Search
              </div>
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/frame5.svg"
              />
            </div> */}
            <div className=" relative ">
              <input
                placeholder="Search..."
                className=" hidden md:block rounded-lg bg-box box-border w-[11.5rem] py-[0.5rem] pl-6  pr-9 focus:outline-none placeholder:text-gray-400"
              ></input>
              <LuSearch className=" h-6 w-6 shrink-0  md:absolute right-0 top-1/4  z-10  md:mx-2  text-green-700 " />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem]">
                  The Digital Art...
                </div>
                <div className="self-stretch relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-placeholder">
                  2098
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem]">
                  Crypto Beats
                </div>
                <div className="self-stretch relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-placeholder">
                  2098
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem]">
                  Reality Beyond
                </div>
                <div className="self-stretch relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-placeholder">
                  2098
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem]">
                  Cosmic Journey
                </div>
                <div className="self-stretch relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-placeholder">
                  2098
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[1.5rem]">
                  Nature’s Symphony
                </div>
                <div className="self-stretch relative text-[0.75rem] tracking-[-0.02em] leading-[1.13rem] text-placeholder">
                  2098
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.75rem]">
          <div className="w-[11.5rem] flex flex-row items-center justify-start gap-[0.5rem]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
              Status
            </div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/frame4.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.75rem] text-[1rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[8.63rem] shrink-0">
                On Sale
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[8.63rem] shrink-0">
                Bundles
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[8.63rem] shrink-0">
                Offers
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.75rem]">
          <div className="w-[11.5rem] flex flex-row items-center justify-start gap-[0.5rem]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
              Price
            </div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/frame4.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-center text-[0.88rem] text-placeholder">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="flex-1 rounded-lg bg-box flex flex-row py-[0.5rem] px-[0.63rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="flex-1 relative tracking-[-0.02em] leading-[1.31rem]">
                  MIN
                </div>
              </div>
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-white text-left">
                to
              </div>
              <div className="flex-1 rounded-lg bg-box flex flex-row py-[0.5rem] px-[0.63rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="flex-1 relative tracking-[-0.02em] leading-[1.31rem]">
                  MAX
                </div>
              </div>
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-medium text-white text-left">
                XRP
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-green flex flex-row py-[0.5rem] px-[0.63rem] items-center justify-center text-left text-dark-green">
              <div className="relative tracking-[-0.02em] leading-[1.31rem] font-semibold">
                Apply
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.75rem]">
          <div className="w-[11.5rem] flex flex-row items-center justify-start gap-[0.5rem]">
            <div className="flex-1 relative tracking-[-0.02em] leading-[1.88rem] font-semibold">
              Category
            </div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/frame4.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.75rem] text-[1rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[8.63rem] shrink-0">
                Art
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[8.63rem] shrink-0">
                Virtual Reality
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[8.63rem] shrink-0">
                Rare Virtual Items
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[8.63rem] shrink-0">
                Gaming
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
              <button className="rounded-lg bg-box flex flex-row p-[0.5rem] items-center justify-start border-[1px] border-solid border-line">
                <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0" />
              </button>
              <div className="relative tracking-[-0.02em] leading-[1.5rem] inline-block w-[8.63rem] shrink-0">
                Sport Collection
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiterSecttion;

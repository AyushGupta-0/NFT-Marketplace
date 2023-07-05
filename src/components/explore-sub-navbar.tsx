import type { NextPage } from "next";

const ExploreSubNavbar: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between text-left text-[2rem] text-white font-inter">
      <div className="flex flex-col items-start justify-start">
        {/* <div className="relative tracking-[-0.02em] leading-[3rem] font-semibold [background:linear-gradient(90deg,_#78ffdf,_#1ebe5e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Explore
        </div> */}
        <div className="tracking-[-0.02em] leading-[3rem] text-xl md:leading-9 md:text-4xl z-10  font-semibold gardient-color-green">
          Explore{" "}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1rem] text-[1rem]">
        <div className="rounded-lg bg-box box-border w-[15.06rem] flex flex-row py-[0.75rem] px-[1.5rem] items-start justify-between border-[1px] border-solid border-line">
          <div className="relative tracking-[-0.02em] leading-[1.5rem]">
            Sort By
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame6.svg"
          />
        </div>
        <div className="rounded-lg bg-box overflow-hidden flex flex-row py-[0rem] pr-[1rem] pl-[0rem] items-center justify-start gap-[1rem]">
          <div className="bg-green flex flex-col p-[0.75rem] items-start justify-start">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src="/frame7.svg"
            />
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame8.svg"
          />
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame9.svg"
          />
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame10.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreSubNavbar;

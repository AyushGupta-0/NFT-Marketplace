import type { NextPage } from "next";
import LiveLaunchesCard from "./LiveLaunchesCard";

const LiveLaunches: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start gap-[2.5rem] text-left text-[1.13rem] text-white font-inter">
      <LiveLaunchesCard />
      <LiveLaunchesCard />
      <LiveLaunchesCard />
      <LiveLaunchesCard />
      
    </div>
  );
};

export default LiveLaunches;

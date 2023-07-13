import type { NextPage } from "next";
import UpcomingProjectsCard from "./UpcomingProjectsCard";



const UpcomingProjects: NextPage = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[2.5rem] text-left text-[0.88rem] text-content font-inter">
      <div className="flex flex-col md:flex-row items-start justify-start gap-[2.5rem]">
        <UpcomingProjectsCard />
        <UpcomingProjectsCard />
        <UpcomingProjectsCard />
        <UpcomingProjectsCard />
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start gap-[2.5rem]">
        <UpcomingProjectsCard />
        <UpcomingProjectsCard />
        <UpcomingProjectsCard />
        <UpcomingProjectsCard />
      </div>
    </div>
  );
};

export default UpcomingProjects;

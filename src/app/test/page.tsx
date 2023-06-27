import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col">
      <div className="h-60 w-60 absolute rounded-full animate-breath top-1/2 bg-green right-8" />
      <div className="absolute bg-background backdrop-blur-xl h-full z-10 w-full bg-opacity-90" />
    </div>
  );
};

export default page;

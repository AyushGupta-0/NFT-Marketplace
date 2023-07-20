import React from "react";
import Image from "next/image";
import { Icons } from "@/components/ui/Icons";

// images
import profile from "@/assets/anonydp.jpeg";

type Props = {};

const imageStyle = {
  outerWidth: '20px',
  outerHeight: '20px',
  borderRadius: '50%',
}
export default function ProfileDisplay({}: Props) {
    return (
      <div>
        <div className="absolute top-[12.5rem] left-[22.25rem] rounded-lg bg-box w-[32.5rem] h-[27.5rem]" />

        <div className="absolute top-[15.5rem] left-[29.38rem] flex flex-col items-center justify-center gap-[1rem]">
          <Image src={profile} alt="profile" style={imageStyle}/>
          <div className="flex flex-col items-center justify-start gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] leading-[1.88rem] font-medium">
              kickbuttowski777
            </div>
            <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] font-medium text-green">
              03x579y9iuTuyukjhkk
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[0.88rem] text-content">
              <div className="relative tracking-[-0.02em] leading-[1.31rem]">
                kick
              </div>
              <Icons.profile />
            </div>
          </div>
        </div>
      </div>
    );
  }
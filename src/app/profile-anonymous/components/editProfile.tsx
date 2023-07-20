const EditProfile = () => {
    return (
      <div className="absolute top-[12.5rem] left-[60.25rem] flex flex-col items-start justify-start gap-[1rem] text-left text-[1.5rem] text-white font-inter">
        <div className="relative tracking-[-0.02em] leading-[2.25rem] font-semibold inline-block w-[25.5rem]">
          Edit profile
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem] text-[1rem]">
          <div className="w-[25.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] leading-[1.5rem] font-medium">
              UserName
            </div>
            <div className="self-stretch rounded-lg bg-box flex flex-row py-[0.75rem] px-[1.5rem] items-start justify-start border-[1px] border-solid border-line">
              <div className="relative tracking-[-0.02em] leading-[1.5rem]">
                kickbuttowski777
              </div>
            </div>
          </div>
          <div className="w-[25.5rem] flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative tracking-[-0.02em] leading-[1.5rem] font-medium">
              bio
            </div>
            <div className="self-stretch rounded-lg bg-box flex flex-row py-[0.75rem] px-[1.5rem] items-start justify-start border-[1px] border-solid border-line">
              <div className="relative tracking-[-0.02em] leading-[1.5rem]">
                I am Daredevil
              </div>
            </div>
          </div>
          <div className="rounded-lg [background:linear-gradient(90deg,_#78ffdf,_#1ebe5e)] w-[25.5rem] flex flex-row py-[0.75rem] px-[1rem] box-border items-center justify-center text-dark-green">
            <div className="relative tracking-[-0.02em] leading-[1.5rem] font-semibold">
              Update profile
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EditProfile;
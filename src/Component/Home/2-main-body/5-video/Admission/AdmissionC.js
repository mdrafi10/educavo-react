import React from "react";
import { Button } from "@mui/material";

const AdmissionC = () => {
  return (
    <div className="video_admission_wrap relative w-full h-[320px] sm:h-[340px] md:h-[380px] lg:w-[50%] lg:h-[490px] xl:h-[510px]">
      <img
        src="images/6-admission/right-bg.jpg"
        alt="video-img"
        className="w-full h-full object-cover -z-10"
      />
      <div className="video_admission_wrap_content">
        <div className="admission_info absolute top-1/2 left-[40%] lg:left-[38%] -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[2.1rem] sm:text-[3.1rem] xl:text-[3.3rem] mb-[0.3rem] sm:mb-[2rem] text-textColorSecondary font-extrabold font-Nunito">
            Admission Open for 2020
          </h1>
          <p className="text-[1.3rem] sm:text-[1.5rem] xl:text-[1.6rem] text-textGray leading-[2.7rem] mb-[0.5rem] sm:mb-[3.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius
            to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims
            ad minim veniam. Aenean massa. Cum sociis natoque penatibus et
            magnis. Apply Now
          </p>
          <div className="btn">
            <Button variant="contained">Apply Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionC;

import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { NavLink } from "react-router-dom";
import { useVarContext } from "../../../../../ContextApi/createConText";

const PalyVideo = () => {
  const global = useVarContext();
  return (
    <div className="video_admission_wrap relative w-full h-[320px] sm:h-[340px] md:h-[380px] lg:w-[50%] lg:h-[490px] xl:h-[510px]">
      <img
        src="images/6-admission/left-bg.jpg"
        alt="video-img"
        className="w-full h-full object-cover -z-10"
      />
      <div className="video_admission_wrap_content absolute top-0 left-0 w-full h-full z-10">
        <NavLink
          to="#"
          className="video_info flex items-center absolute bottom-[40.5%] lg:bottom-[10.5%] left-[10%] lg:left-[38%] text-white transition duration-300 hover:text-[#ccc6c6]"
          onClick={global.hadlePopUp}
        >
          <div className="video_icon flex items-center justify-center w-[60px] h-[60px] mr-[1.5rem] border-[4px] border-white rounded-full">
            <ArrowRightIcon />
          </div>
          <h2 className="text-[2.4rem] font-bold font-Nunito">
            Take a Video <br /> Tour at Educavo
          </h2>
        </NavLink>
      </div>
    </div>
  );
};

export default PalyVideo;

import React from "react";

const Donar = ({ img, name, teacher }) => {
  return (
    <div className="single_donar flex bg-[#f3f8f9] py-[3rem] px-[2.5rem] rounded-[0.5rem] w-[74rem] mb-[5.5rem] [&:nth-child(2)]:mb-0">
      <img
        src={img}
        alt="donetion"
        className="w-[209px] rounded-[0.5rem] mr-[5.5rem]"
      />
      <div className="donetaion_info">
        <p className="text-[2.2rem] text-textColorSecondary font-Nunito font-bold mb-[2.2rem] relative pr-[3rem]">
          Education is the passport to the future for tomorrow belongs to those
          who prepare for it today
        </p>
        <h3 className="text-[1.8rem] text-textColorSecondary font-Nunito font-semibold mb-[0.8rem]">
          {name}
        </h3>
        <h4 className="text-[1.5rem] text-textGray font-normal]">{teacher}</h4>
      </div>
    </div>
  );
};

export default Donar;

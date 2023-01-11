import React from "react";

const Events = ({ num }) => {
  return (
    <div className="single_category_info group w-full lg:w-[45rem] xl:w-[63.2rem] flex items-center bg-white py-[3.2rem] pl-0 pr-[3rem] lg:px-[3rem] mb-[3rem] rounded-[0.3rem]">
      <div className="category_date bg-[#cee9f8] py-[1rem] px-[1.9rem] text-center mr-[2.5rem] rounded-[0.3rem] group-[&:nth-child(2)]:bg-[#e9fbd5] group-[&:nth-child(3)]:bg-[#fee2c0]">
        <h3 className="text-textColorSecondary text-[1.4rem] font-normal mt-[0.5rem]">
          June
        </h3>
        <h1 className="text-textColorSecondary text-[5rem] font-Nunito -my-[0.9rem]">
          {num}
        </h1>
      </div>
      <div className="category_info">
        <h4 className="text-textGray text-[1.5rem] font-normal leading-[2.99rem]">
          Math & English
        </h4>
        <h2 className="text-textColorSecondary text-[2.4rem] font-bold font-Nunito cursor-pointer transition duration-300 hover:text-btnBg">
          Educational Technology and Mobile Accessories Learning
        </h2>
      </div>
    </div>
  );
};

export default Events;

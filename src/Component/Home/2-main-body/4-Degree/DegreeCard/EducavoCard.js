import React from "react";

const EducavoCard = ({ title, img }) => {
  return (
    <div className="edcavo-student-img-info relative w-full h-full md:w-[330px] md:h-[328px] lg:w-[290px] lg:h-[288px] xl:w-[400px] mb-[30px] xl:h-[398px] overflow-hidden rounded-[5px] group">
      <div className="student-img-info relative">
        <div className="student-img1 w-full relative before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0">
          <img src={img} alt="std-img" className="w-full -z-10" />
          <h1 className="text-white absolute left-[20px] bottom-[20px] text-[2.6rem] md:text-[2rem] lg:text-[2.5rem] font-medium duration-300 group-hover:-bottom-[30px]">
            {title}
          </h1>
        </div>
        <div className="student-info text-white bg-rgbBg w-[85%] h-[85%] py-[6.5rem] px-[3rem] md:p-[1.5rem] lg:py-0 xl:py-[6.5rem] lg:px-[1.5rem] xl:px-[3rem] absolute top-1/2 left-1/2 text-center rounded-[5px] duration-300 -translate-x-1/2 -translate-y-1/2">
          <h1 className="mt-[22px] sm:mt-[28px] xl:mt-[35px] text-[24px] sm:text-[28px] md:text-[22px] xl:text-[24px] font-medium">
            {title}
          </h1>
          <p className="my-[17px] text-[14px] lg:text-[16px] w-full font-normal leading-[2.8rem]">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod
          </p>
          <span className="text-center text-[14px] font-medium m-auto cursor-pointer border-b border-white">
            READ MORE
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducavoCard;

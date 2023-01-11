import React from "react";
import ButtonMui from "../../../../shared/ButtonMui";

const AboutStd = () => {
  return (
    <div
      className="about-std-university w-full md:w-[80%] mx-auto lg:w-[40%] xl:max-w-[460px] py-[60px] xl:py-[88px] px-[30px] xl:px-[50px] shadow-md text-white rounded-md"
      style={{
        background:
          "url(https://keenitsolutions.com/products/html/educavo/assets/images/bg/about-intro-bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="font-Nunito text-[16px] xl:text-[18px] uppercase text-[#21a7d0] font-extrabold">
        About Educavo
      </h3>
      <h2 className="font-Nunito text-[30px] xl:text-[37px] my-[10px] font-bold">
        Welcome to <br /> Educavo University
      </h2>
      <p className="text-2xl xl:text-[1.8rem] my-[20px] font-normal leading-[30px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae
        suscipit aut itaque? Debitis dolorum, nulla deleniti alias obcaecati
        provident.
      </p>
      <div className="btn">
        <ButtonMui title="Read More" className="!py-5 !text-[#fff]" />
      </div>
    </div>
  );
};

export default AboutStd;

import React from "react";
import AboutStd from "./AboutStd/AboutStd";
import Point from "./Point/Point";
import ImagesCom from "./ImgCom/ImagesCom";
import img from "../../../Data/AboutData/img";

const AboutSec = () => {
  return (
    <section className="about_section py-[10rem] font-Nunito">
      <div className="container">
        <div className="student-container flex flex-wrap lg:flex-nowrap gap-20 md:justify-between">
          <AboutStd />
          {/* great-point */}
          <div className="great-point-main w-full md:w-[80%] mx-auto lg:w-[58%] xl:w-auto">
            <div className="great-point flex flex-col md:flex-row mb-[40px]">
              <Point st="2k+" info="Students" />
              <Point st="3.50" info="Average CGPA" />
              <Point st="95%" info="Graduates" />
            </div>
            {/* Api */}
            <ImagesCom img={img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;

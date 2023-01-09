import React from "react";
import "./DegreeSec.css";
import EducavoCard from "./DegreeCard/EducavoCard";

const DegreeSec = () => {
  return (
    <section className="degree_section pt-[10rem] pb-[7rem] bg-grayBg">
      <div className="container">
        <div className="educavo-student-head flex justify-between flex-wrap">
          <div className="edcavo-student-info py-0 md:py-[60px] w-full md:w-[330px] lg:w-[290px] xl:w-[400px] mb-[30px]">
            <h2 className="text-[17px] text-[#21a7d0] mb-[1.5rem] font-bold">
              DEGREE CATEGORIS
            </h2>
            <h1 className="text-[28px] xl:text-[35px] text-[#112958] font-Nunito font-bold">
              Successfully Complete A Degree at Educavo University
            </h1>
          </div>
          <EducavoCard title="Undergraduate" img="images/5-degree/1.jpg" />
          <EducavoCard title="Postgraduate" img="images/5-degree/2.jpg" />
          <EducavoCard title="PHD Scholarships" img="images/5-degree/3.jpg" />
          <EducavoCard title="International Hubs" img="images/5-degree/4.jpg" />
          <EducavoCard title="PHD Scholarships" img="images/5-degree/5.jpg" />
        </div>
      </div>
    </section>
  );
};

export default DegreeSec;

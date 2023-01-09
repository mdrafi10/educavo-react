import React from "react";
import { serviced } from "../../../Data/Service/servicedata";

const ServiceSection = () => {
  return (
    <section className="service_section w-full -mt-[1px]">
      <div className="service_head flex flex-wrap">
        {serviced.map((srvice) => {
          return (
            <div
              className="service_item relative max-w-full md:max-w-1/2 lg:max-w-[25%] xl:max-w-[47.57rem] group flex-wrap lg:flex-nowrap flex-[100%] md:flex-[50%] lg:flex-[0.33] overflow-hidden -mb-[0.5px] lg:-mb-0 h-[30rem] md:h-[29%] lg:h-auto"
              key={srvice.id}
            >
              <img
                src={srvice.url}
                alt="service"
                className="w-full mt-0 lg:mt-[0.2%] h-full lg:h-[99.8%] object-cover"
              />
              <div className="service_info absolute top-1/2 w-full h-full text-center text-white z-[1] flex flex-col items-center justify-center -translate-y-1/2 after:absolute after:left-0 after:top-0 after:content-[''] after:w-full after:h-full after:opacity-90 after:-z-[1] group-[&:nth-child(1)]:after:bg-[#273c66] group-[&:nth-child(2)]:after:bg-[#21a7d0] group-[&:nth-child(3)]:after:bg-[#772bea] group-[&:nth-child(4)]:after:bg-[#16aaca]">
                {srvice.icon}
                <h2 className="text-[2.2rem] lg:text-[2rem] xl:text-[2.2rem] font-medium">
                  {srvice.text}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;

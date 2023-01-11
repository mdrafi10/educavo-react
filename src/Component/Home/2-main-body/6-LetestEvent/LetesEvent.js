import React from "react";
import Events from "./Event/Events";

const LetesEvent = () => {
  return (
    <section className="letest_event pt-[10rem] relative z-[5] after:absolute after:content-[''] after:top-0 after:right-0 after:w-[63%] after:h-full after:-z-[5] lg:after:bg-[#f3f8f9] after:bg-white">
      <div className="container">
        <div className="letest_event_wrapper flex flex-wrap lg:flex-nowrap justify-between mb-[6rem] lg:mb-0">
          <div className="event_info_img pt-[1.2rem] mb-[3rem]">
            <div className="event_info">
              <h2 className="text-btnBg text-[1.8rem] font-medium mb-[1rem]">
                LATEST EVENTS
              </h2>
              <h1 className="text-textColorSecondary text-[3rem] font-medium mb-[4.5rem]">
                Educavo Events
              </h1>
            </div>
            <img
              src="images/7-events/single.jpg"
              alt="event-img"
              className="w-full lg:w-[80%] xl:w-full object-cover rounded-[0.3rem]"
            />
          </div>

          <div className="event_category">
            <Events num="20" />
            <Events num="21" />
            <Events num="22" />
            <h2 className="inline text-textColorSecondary text-[1.6rem] font-medium mt-[6rem] cursor-pointer relative after:absolute after:content-[''] after:bg-textColorSecondary after:h-[1px] after:w-[0%] after:right-0 after:bottom-0 after:duration-500 hover:after:left-0 hover:after:w-full mt[1rem]">
              VIEW ALL EVENTS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetesEvent;

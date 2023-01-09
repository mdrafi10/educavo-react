import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { photos } from "../../../Data/SlideData/SlideData";
import SampleNextArrow from "./custom-btn/SampleNextArrow";
import SamplePrevArrow from "./custom-btn/SamplePrevArrow";
import ButtonMui from "../../../shared/ButtonMui";

const SliderSec = () => {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="slider_section w-full">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div
              className="slide relative w-full h-[530px] sm:h-[580px] md:h-[630px] lg:h-[776px]"
              key={photo.id}
            >
              <div>
                <img
                  src={photo.url}
                  alt="slide-img"
                  className="absolute top-0 w-full h-full object-cover z-[-100]"
                />
              </div>
              <div className="container sl-content">
                <div className="silde-info flex flex-col justify-center h-[530px] sm:h-[580px] md:h-[630px] lg;h-[700px] xl:h-[776px] z-10">
                  <h2 className="text-white text-[2.2rem] sm:text-[3.2rem] md:text-[3.5rem] lg:text-[3.9rem] xl:text-[5rem] font-normal xl:font-normal mr-[0.7rem] font-Nunito mb-[0.3rem] xl:font-Rubik">
                    World Leading University
                  </h2>
                  <h1 className="text-white text-[3.5rem] sm:text-[5rem] md:text-[5.8rem] lg:text-[7rem] xl:text-[8.5rem] font-bold font-Nunito xl:font-Rubik xl:font-medium mb-[1rem]">
                    Educavo University
                  </h1>
                  <div className="btn-sec">
                    <ButtonMui
                      title="Discover More"
                      className="!px-[3.5rem] !py-[1.5rem] hover:!bg-[#0580b1] !font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SliderSec;

import React from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imgs } from "../../../Data/logoData/Logodata";

const LogoSlide = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="logo_slide bg-[#f3f8f9] py-[7rem] lg:py-[10rem]">
      <div className="container">
        <Slider {...settings}>
          {imgs.map((img) => {
            return (
              <div key={img.id} className="slide_logo_img">
                <NavLink to="#" className="outline-none border-none">
                  <img src={img.url} alt="logo" className="h-[33px]" />
                </NavLink>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlide;

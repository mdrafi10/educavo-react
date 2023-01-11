import React from "react";
import "./Testmonial.css";
import Donar from "./Donaar/Donar";
import ButtonMui from "../../../shared/ButtonMui";

const Testmonial = () => {
  return (
    <section className="testmonial_section py-[10rem]">
      <div className="container">
        <div className="testmonial_wrapper flex flex-wrap justify-between">
          <div className="testmonial_donor w-[44rem]">
            <img
              src="images/9-donetion/1.jpg"
              alt="donar"
              className="w-full object-cover mb-[2rem] rounded-[0.5rem]"
            />
            <h1 className="text-[2.45rem] text-textColorSecondary font-Nunito font-bold mb-[1rem]">
              Donation helps us
            </h1>
            <p className="text-[1.55rem] text-textGray leading-[2.7rem] mb-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed
              eius to mod tempors incididunt ut labore et dolore magna this
              aliqua enims ad minim.
            </p>
            <div className="btn">
              <ButtonMui
                title="BECOME A DONOR"
                className="!font-Rubik !font-medium !-tracking-[0.02rem] !py-[13px] !px-[29px]"
              />
            </div>
          </div>

          <div className="tesmonial_donation">
            <Donar
              img="images/9-donetion/1 (1).jpg"
              name="Mahadi mansura"
              teacher="Head Teacher"
            />
            <Donar
              img="images/9-donetion/2.jpg"
              name="Jonathon Lary"
              teacher="Math Teacher"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;

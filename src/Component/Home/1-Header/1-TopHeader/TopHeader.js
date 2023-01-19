import React from "react";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WifiCallingIcon from "@mui/icons-material/WifiCalling";
import LoginIcon from "@mui/icons-material/Login";
import ButtonMui from "../../../shared/ButtonMui";

const TopHeader = () => {
  console.log("hello");
  return (
    <div className="top_header bg-headerTopBg">
      <div className="container">
        <div className="flex items-center">
          <div className="flex items-center pr-6 mr-6 border-r border-borderColor header_support_mail text-white gap-2">
            <MailOutlineIcon />
            <NavLink
              to="#"
              className="text-[1.5rem] text-white font-normal transition-all hover:text-hover"
            >
              support@rstheme.com
            </NavLink>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="header_contact flex items-center text-white">
              <WifiCallingIcon />
              <span className="hover:text-hover cursor-pointer text-white text-[1.5rem] font-normal ml-[0.4rem] transition-all">
                (+088) 589-8745
              </span>
            </div>
            <div className="flex items-center">
              <div className="login_sinup flex items-center text-btnBg">
                <LoginIcon />
                <NavLink
                  to="#"
                  className="hover:text-hover text-[1.5rem] font-medium text-white transition-all"
                >
                  {" "}
                  Login/
                </NavLink>
                <NavLink
                  to="#"
                  className="hover:text-hover text-[1.5rem] font-medium text-white transition-all"
                >
                  Register
                </NavLink>
              </div>
              <div className="apply_btn">
                <ButtonMui
                  title="Apply Now"
                  className="!rounded-[0px] !px-[3rem] hover:!bg-[#23b0db] !shadow-none !ml-[3rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

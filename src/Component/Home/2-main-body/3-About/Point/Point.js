import React from "react";

const Point = ({ st, info }) => {
  return (
    <>
      <div className="point w-full lg:w-[200px] xl:w-[225px] bg-[#fbf8cc] mr-[31px] text-center py-[31px] rounded-[3px] [&:nth-child(2)]:bg-[#e9fbd5] [&:nth-child(3)]:bg-[#dcf1fd] [&:nth-child(3)]:mr-0">
        <h1 className="text-[42px] font-Nunito font-bold text-[#112958]">
          {st}
        </h1>
        <h4 className="text-[22px] font-Nunito font-bold text-[#394459]">
          {info}
        </h4>
      </div>
    </>
  );
};

export default Point;

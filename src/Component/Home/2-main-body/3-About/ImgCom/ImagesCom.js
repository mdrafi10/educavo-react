import React from "react";

const ImagesCom = ({ img }) => {
  return (
    <>
      <div className="student-img flex flex-wrap group sm:justify-between gap-10 sm:gap-0">
        {img.map((cur) => {
          const { id, image } = cur;
          return (
            <div
              className="photo mx-auto w-[95%] sm:w-[47%] xl:w-[353px] overflow-hidden rounded-[3px]"
              key={id}
            >
              <img
                src={image}
                alt="student"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagesCom;

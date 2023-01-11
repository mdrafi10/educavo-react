import React from "react";
import AdmissionC from "./Admission/AdmissionC";
import PalyVideo from "./PlayVideo/PalyVideo";

const VideoSec = () => {
  return (
    <section className="video_section">
      <div className="video_wrapper flex flex-wrap">
        <PalyVideo />
        <AdmissionC />
      </div>
    </section>
  );
};

export default VideoSec;

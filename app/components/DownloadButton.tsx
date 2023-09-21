import React from "react";

import Lottie from "react-lottie-player";
import lottieJson from "../../public/img/animated-photo.json";

interface DownloadButtonProps {
  handleDownload: () => void;
}

const DownloadButton = ({ handleDownload }: DownloadButtonProps) => {
  return (
    <div
      className=" bg-orange-500/80 hover:bg-BRAND hover:text-TEXT-HIGHLIGHT transition-all z-[8] flex flex-col items-center p-6 rounded-lg"
      onClick={handleDownload}
    >
      <div className="w-60 h-60 ">
        <Lottie loop animationData={lottieJson} play />
      </div>
      <p>Download your quote card</p>
    </div>
  );
};

export default DownloadButton;

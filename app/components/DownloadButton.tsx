import React from "react";

import Lottie from "react-lottie-player";
import lottieJson from "../../public/img/animated-photo.json";

interface DownloadButtonProps {
  handleDownload: () => void;
}

const DownloadButton = ({ handleDownload }: DownloadButtonProps) => {
  return (
    <div
      className=" bg-orange-500/80 hover:bg-BRAND hover:text-TEXT-HIGHLIGHT transition-all rounded-lg z-[8] "
      onClick={handleDownload}
    >
      <Lottie loop animationData={lottieJson} play />
      <p>Download your quote card</p>
    </div>
  );
};

export default DownloadButton;

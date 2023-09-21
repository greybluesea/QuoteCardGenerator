import React from "react";

import Lottie from "react-lottie-player";
import lottieJson from "../../public/img/animated-photo.json";

interface DownloadButtonProps {
  handleDownload: () => void;
  /*  blobUrl: string | null; */
}

const DownloadButton = ({
  handleDownload /* ,blobUrl */,
}: DownloadButtonProps) => {
  return (
    <div
      className=" bg-orange-500/90  flex justify-evenly items-center p-6 large-text cursor-pointer max-h-20 overflow-hidden scale-[0.75] sm:scale-[0.8] md:scale-[0.85] lg:scale-[0.9] xl:scale-[0.95] 2xl:scale-100 rounded-lg hover:bg-BRAND hover:text-TEXT-HIGHLIGHT  hover:shadow-[0_0_5px_5px_rgba(249,207,22,0.9)] transition-all "
      onClick={handleDownload}
      autoFocus
    >
      <p>Download</p>
      <div className=" w-20 h-20 ">
        <Lottie loop animationData={lottieJson} play />
      </div>
    </div>
  );
};

export default DownloadButton;

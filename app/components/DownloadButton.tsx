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
      className=" bg-orange-500/80 hover:bg-BRAND hover:text-TEXT-HIGHLIGHT transition-all flex justify-evenly items-center p-6 rounded-lg large-text cursor-pointer max-h-[120px] overflow-hidden"
      onClick={handleDownload}
    >
      <p>Download</p>
      <div className=" w-20 h-20 ">
        <Lottie loop animationData={lottieJson} play />
      </div>
    </div>
  );
};

export default DownloadButton;

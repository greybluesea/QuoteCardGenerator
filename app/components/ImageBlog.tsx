import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageBlobProps {
  // quoteCardString: string | null;
  blobUrl: string | null;
}

const ImageBlob = ({
  //  quoteCardString,
  blobUrl,
}: ImageBlobProps) => {
  /*  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
        "Access-Control-Allow-Origin": "*",
      },
      body: "...",
    };
    const binaryData = Buffer.from(response.body, "base64");
    const blob = new Blob([binaryData], {
      type: response.headers["Content-Type"],
    });
    const newBlobUrl = URL.createObjectURL(blob);
    setBlobUrl(newBlobUrl);
    return () => {
      URL.revokeObjectURL(newBlobUrl);
    };
  }, []);*/

  if (!blobUrl) {
    return null;
  }

  return (
    <Image
      src={blobUrl}
      className="image-blob z-[8]"
      alt="Generated quote card"
      width={178}
      height={100}
    />
  );
};

export default ImageBlob;

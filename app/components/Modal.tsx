"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Spinner from "./Spinner";
import ImageBlob from "./ImageBlog";
import DownloadButton from "./DownloadButton";

type ModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  isMakingQuoteCard: boolean;
  quoteCardString: string | null;
};

const Modal = ({
  modalIsOpen,
  closeModal,
  isMakingQuoteCard,
  quoteCardString = "",
}: ModalProps) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    if (typeof blobUrl === "string") {
      link.href = blobUrl;
      link.download = "quote-card.png";
      link.click();
    }
  };

  useEffect(() => {
    if (quoteCardString) {
      const binaryData = Buffer.from(quoteCardString, "base64");
      const imageBlob = new Blob([binaryData], { type: "image/png" });
      const blobUrlGenerated = URL.createObjectURL(imageBlob);
      //   console.log(blobUrlGenerated);
      setBlobUrl(blobUrlGenerated);

      return () => {
        URL.revokeObjectURL(blobUrlGenerated);
      };
    }
  }, [quoteCardString]);

  return (
    <Dialog.Root open={modalIsOpen} onOpenChange={closeModal} modal>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            bg-sky-700/20
            backdrop-blur-[2px] 
            fixed 
            inset-0
            z-[5]
          "
        />
        <Dialog.Content className="square-in-the-center bg-sky-600/60 border-sky-500 z-[6] backdrop-blur-md ">
          <Dialog.Title
            className={
              " large-text " +
              (isMakingQuoteCard && " absolute top-[12dvh] ") +
              (!blobUrl && " absolute top-[12dvh] ") +
              (!isMakingQuoteCard &&
                blobUrl &&
                " mb-[1dvh] md:mb-[2dvh] lg:mb-[3dvh] xl:mb-[4dvh] 2xl:mb-[5dvh] ")
            }
          >
            {isMakingQuoteCard
              ? "Generating your Quote Card"
              : blobUrl
              ? "Quote Card is ready for download"
              : "Failed to generate the Quote Card"}
          </Dialog.Title>
          {/*  <Dialog.Description
            className="
              mb-3 
              text-center
            "
          >
            "description"
          </Dialog.Description> */}

          <Dialog.Close asChild>
            <button
              className="
                text-NEUTRAL
                hover-text-highlight 
                absolute 
                top-[10px] 
                right-[10px] 
                inline-flex 
                h-[35px] 
                w-[35px] 
                appearance-none 
                items-center 
                justify-center 
                rounded-full 
              "
              aria-label="Close"
            >
              <IoMdClose size="25" />
            </button>
          </Dialog.Close>
          {isMakingQuoteCard && <Spinner />}

          {!isMakingQuoteCard && !blobUrl && (
            <div autoFocus={true} className="large-text"></div>
          )}

          {!isMakingQuoteCard && blobUrl && (
            <section
              autoFocus={true}
              className="space-y-[1dvh] md:space-y-[2dvh] lg:space-y-[3dvh] xl:space-y-[4dvh] 2xl:space-y-[5dvh]"
            >
              <div className="flex flex-col items-center space-y-[1dvh] ">
                <p className="medium-text">hover to preview</p>
                <ImageBlob blobUrl={blobUrl} onClick={handleDownload} />
              </div>
              <DownloadButton handleDownload={handleDownload} />
            </section>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

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
      link.download = "quote.png";
      link.click();
    }
  };

  useEffect(() => {
    if (quoteCardString) {
      const binaryData = Buffer.from(quoteCardString, "base64");
      const blob = new Blob([binaryData], { type: "image/png" });
      const blobUrlGenerated = URL.createObjectURL(blob);
      console.log(blobUrlGenerated);
      setBlobUrl(blobUrlGenerated);

      return () => {
        URL.revokeObjectURL(blobUrlGenerated);
      };
    }
  }, [quoteCardString, blobUrl]);

  return (
    <Dialog.Root open={modalIsOpen} onOpenChange={closeModal} modal>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            bg-slate-800/20
            backdrop-blur-sm 
            fixed 
            inset-0
            z-[5]
          "
        />
        <Dialog.Content className="square-in-the-center bg-sky-600/60 z-[6] ">
          <Dialog.Title
            className={
              " large-text " +
              (isMakingQuoteCard && " absolute top-[12dvh] ") +
              (!blobUrl && " absolute top-[12dvh] ")
            }
          >
            {isMakingQuoteCard
              ? "Making Quote Card"
              : blobUrl
              ? "Quote Card is ready for download"
              : "Failed to make the Quote Card"}
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

          {isMakingQuoteCard && blobUrl && (
            <section autoFocus={true} className="large-text space-y-[5dvh]">
              <div>
                <p className="space-y-[2dvh]">hover to see your preview</p>
                <ImageBlob blobUrl={blobUrl} />
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

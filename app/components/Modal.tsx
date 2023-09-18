"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { IoMdClose } from "react-icons/io";
import useStore from "../zustandStore/store";

/* type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: React.ReactNode;
};
 */
const Modal = (/* {
  isOpen,
  onClose,
  title,
  description,
  children,
}: ModalProps */) => {
  const { modalIsOpen, closeModal } = useStore();
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
        <Dialog.Content
          className="
            fixed 
            top-[50%] 
            left-[50%]  
            translate-x-[-50%] 
            translate-y-[-50%] 

            bg-sky-700/40 
            backdrop-blur-lg
            rounded-lg 
            border 
            border-BGCOLOR
            drop-shadow-[5px_5px_5px_5px_rgba(222, 224, 228, 0.9)] 
             
            w-[63dvw] 
            h-[70dvh]
            md:h-[63dvh] 
            min-w-[320px]
            
            px-[7dvw]
          
            z-[6]
            flex flex-col items-center justify-center
          "
        >
          <Dialog.Title
            className="
              text-2xl 
              text-center 
              font-bold 
              mb-2
            "
          >
            'title'
          </Dialog.Title>
          <Dialog.Description
            className="
              mb-3 
              text-center
            "
          >
            "description"
          </Dialog.Description>

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
          <div autoFocus={true}>{"text"}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

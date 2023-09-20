"use client";

import React from "react";
import useModal from "../zustandStore/useModal";
import Modal from "./Modal";
import useTotalQuoteCardsGenerated from "../zustandStore/useToatalQuoteCardsGenerated";

type Props = {};

const QuoteButton = (props: Props) => {
  const { openModal } = useModal();
  const { TotalQuoteCardsAddOne } = useTotalQuoteCardsGenerated();
  return (
    <>
      <button
        className="large-text bg-orange-500/90 hover:bg-BRAND hover:text-TEXT-HIGHLIGHT rounded-lg z-[3]"
        style={{
          paddingLeft: "max(3dvw, 3dvh)",
          paddingRight: "max(3dvw, 3dvh)",
          paddingTop: "min(3dvw, 3dvh)",
          paddingBottom: "min(3dvw, 3dvh)",
          marginTop: "min(7dvw, 7dvh)",
        }}
        onClick={openModal}
      >
        Quote of the day
      </button>
      <Modal />
    </>
  );
};

export default QuoteButton;

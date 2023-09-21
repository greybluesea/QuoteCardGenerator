"use client";

import React, { useState } from "react";
// import useModal from "../zustandStore/useModal";
import Modal from "./Modal";
import useTotalQuoteCardsGenerated from "../zustandStore/useToatalQuoteCardsGenerated";

type Props = {};

const QuoteButton = (props: Props) => {
  // const { openModal } = useModal();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMakingQuoteCard, setIsMakingQuoteCard] = useState(false);
  const [quoteCardString, setQuoteCardString] = useState<string | null>(null);
  const { TotalQuoteCardsAddOne } = useTotalQuoteCardsGenerated();

  const handleOpenModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setModalIsOpen(true);
    setIsMakingQuoteCard(true);
    try {
      // Run Lambda Function
      /*  const runFunction = "runFunction";
      const runFunctionStringified = JSON.stringify(runFunction);
      const response = await API.graphql<GenerateAQuoteData>({
        query: generateAQuote,
        authMode: "AWS_IAM",
        variables: {
          input: runFunctionStringified,
        },
      });
      const responseStringified = JSON.stringify(response);
      const responseReStringified = JSON.stringify(responseStringified);
      const bodyIndex = responseReStringified.indexOf("body=") + 5;
      const bodyAndBase64 = responseReStringified.substring(bodyIndex);
      const bodyArray = bodyAndBase64.split(",");
      const body = bodyArray[0];
      console.log(body);
      setQuoteReceived(body);

      // End state:
      setIsMakingQuoteCard(false);

      // Fetch if any new quotes were generated from counter
      updateQuoteInfo();
      setIsMakingQuoteCard(false);
       */

      setTimeout(() => {
        setIsMakingQuoteCard(false);
      }, 3000);
    } catch (error) {
      console.log("error generating quote:", error);
      setIsMakingQuoteCard(false);
    }
  };

  return (
    <>
      <button
        className="large-text bg-orange-500/90 hover:bg-BRAND hover:text-TEXT-HIGHLIGHT hover:scale-105 transition-all rounded-lg z-[3] "
        style={{
          paddingLeft: "max(3dvw, 3dvh)",
          paddingRight: "max(3dvw, 3dvh)",
          paddingTop: "min(3dvw, 3dvh)",
          paddingBottom: "min(3dvw, 3dvh)",
          marginTop: "min(7dvw, 7dvh)",
        }}
        // onClick={openModal}
        onClick={handleOpenModal}
      >
        Quote Card of the day
      </button>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        isMakingQuoteCard={isMakingQuoteCard}
        quoteCardString={quoteCardString}
      />
    </>
  );
};

export default QuoteButton;

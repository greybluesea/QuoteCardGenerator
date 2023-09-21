"use client";

import React, { useState } from "react";
// import useModal from "../zustandStore/useModal";
import Modal from "./Modal";
import useTotalQuoteCardsGenerated from "../zustandStore/useToatalQuoteCardsGenerated";
import { API } from "aws-amplify";
import { generateAQuoteCard } from "@/src/graphql/queries";

type Props = {};

interface APIResponse {
  generateAQuote: {
    statusCode: number;
    headers: { [key: string]: string };
    body: string;
  };
}

const QuoteCardButton = (props: Props) => {
  // const { openModal } = useModal();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMakingQuoteCard, setIsMakingQuoteCard] = useState(false);
  const [quoteCardString, setQuoteCardString] = useState<string | null>(null);
  const { TotalQuoteCardsAddOne } = useTotalQuoteCardsGenerated();

  const handleOpenModal = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setModalIsOpen(true);
    setIsMakingQuoteCard(true);
    try {
      // Run Lambda Function
      const runFunction = "runFunction";
      const runFunctionStringified = JSON.stringify(runFunction);
      const response = await API.graphql<APIResponse>({
        query: generateAQuoteCard,
        authMode: "AWS_IAM",
        variables: {
          input: runFunctionStringified,
        },
      });
      // console.log(response);
      const responseStringified = JSON.stringify(response);
      /*  console.log(responseStringified);
      const responseReStringified = JSON.stringify(responseStringified);
      console.log(responseReStringified);
      const bodyIndex = responseReStringified.indexOf("body=") + 5;
      const bodyAndBase64 = responseReStringified.substring(bodyIndex); */
      const bodyIndex = responseStringified.indexOf("body=") + 5;
      const bodyAndBase64 = responseStringified.substring(bodyIndex);
      const bodyArray = bodyAndBase64.split(",");
      const body = bodyArray[0];
      //   console.log(body);
      setQuoteCardString(body);

      setIsMakingQuoteCard(false);

      TotalQuoteCardsAddOne();

      /*  setTimeout(() => {
        setIsMakingQuoteCard(false);
      }, 3000); */
    } catch (error) {
      console.log("error generating quote:", error);
      setIsMakingQuoteCard(false);
    }
  };

  return (
    <>
      <button
        className="large-text bg-orange-500/90 hover:bg-BRAND hover:text-TEXT-HIGHLIGHT hover:scale-105 rounded-lg hover:shadow-[0_0_5px_5px_rgba(249,207,22,0.9)] transition-allz-[3] "
        style={{
          paddingLeft: "max(3dvw, 3dvh)",
          paddingRight: "max(3dvw, 3dvh)",
          paddingTop: "min(3dvw, 3dvh)",
          paddingBottom: "min(3dvw, 3dvh)",
          marginTop: "min(7dvw, 7dvh)",
        }}
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

export default QuoteCardButton;

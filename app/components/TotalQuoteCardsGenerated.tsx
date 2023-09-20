"use client";

import React, { useEffect } from "react";
import useTotalQuoteCardsGenerated from "../zustandStore/useToatalQuoteCardsGenerated";
import { quoteCardGeneratorQueryName } from "@/src/graphql/queries";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
Amplify.configure(awsconfig);

type Props = {};

export type TotalQuoteCardsGeneratedType = {
  id: string;
  queryName: string;
  totalQuoteCardsGenerated: number;
  createdAt: string;

  updatedAt: string;
};

const TotalQuoteCardsGenerated = (props: Props) => {
  const { totalQuoteCards, setTotalQuoteCards } = useTotalQuoteCardsGenerated();

  useEffect(() => {
    const fetchTotalQuoteCardsGenerated = async () => {
      try {
        const res = await API.graphql<TotalQuoteCardsGeneratedType>({
          query: quoteCardGeneratorQueryName,
          authMode: "AWS_IAM",
          variables: {
            queryName: "count",
          },
        });

        console.log(res);
      } catch (error) {
        console.log("error fetching quote cards number", error);
      }
    };

    fetchTotalQuoteCardsGenerated();
  }, []);

  return (
    <p className="hidden lg:flex text-BRAND text-xl">
      Total Quote Cards Generated: {totalQuoteCards}
    </p>
  );
};

export default TotalQuoteCardsGenerated;

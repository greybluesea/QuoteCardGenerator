"use client";

import React, { useEffect } from "react";
import useTotalQuoteCardsGenerated from "../zustandStore/useToatalQuoteCardsGenerated";
import { quoteCardGeneratorQueryName } from "@/src/graphql/queries";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";

import awsExports from "../../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

/* type Props = {
  count?: number;
};
 */
export type TotalQuoteCardsGeneratedType = {
  id: string;
  queryName: string;
  totalQuoteCardsGenerated: number;
  createdAt: string;
  updatedAt: string;
};

const TotalQuoteCardsGenerated = (/* { count }: Props */) => {
  const { totalQuoteCards, setTotalQuoteCards } = useTotalQuoteCardsGenerated();

  useEffect(() => {
    const fetchTotalQuoteCardsGenerated = async () => {
      try {
        const res = (await API.graphql<TotalQuoteCardsGeneratedType>({
          query: quoteCardGeneratorQueryName,
          authMode: "AWS_IAM",
          variables: {
            queryName: "count",
          },
        })) as GraphQLResult<{
          quoteCardGeneratorQueryName: {
            items: [TotalQuoteCardsGeneratedType];
          };
        }>;

        if (
          !res.data ||
          !res.data?.quoteCardGeneratorQueryName ||
          !res.data.quoteCardGeneratorQueryName.items[0]
        ) {
          throw new Error("bad response from API.graphql");
        }

        const count =
          res.data.quoteCardGeneratorQueryName.items[0]
            .totalQuoteCardsGenerated;
        setTotalQuoteCards(count);
      } catch (error) {
        console.log("error fetching quote cards number", error);
      }
    };

    fetchTotalQuoteCardsGenerated();
  }, []);

  /*  setTotalQuoteCards(count || 0); */
  return (
    <p className="hidden lg:flex text-BRAND text-xl">
      Total Quote Cards Generated: {totalQuoteCards}
    </p>
  );
};

export default TotalQuoteCardsGenerated;

import Link from "next/link";
import TotalQuoteCardsGenerated, {
  TotalQuoteCardsGeneratedType,
} from "./TotalQuoteCardsGenerated";
/* import { API, Amplify, withSSRContext } from "aws-amplify";
import { headers } from "next/headers";
import awsExports from "../../src/aws-exports";
import { quoteCardGeneratorQueryName } from "@/src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

Amplify.configure({ ...awsExports, ssr: true });

export const revalidate = 0; */

type Props = {};

const Footer = async (props: Props) => {
  /*  const req = {
    headers: {
      cookie: headers().get("cookie"),
    },
  };
  const SSR = withSSRContext({ req });

  const fetchTotalQuoteCardsGenerated = async () => {
    try {
      const res = (await SSR.API.graphql({
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

      return res.data.quoteCardGeneratorQueryName.items[0]
        .totalQuoteCardsGenerated;
    } catch (error) {
      console.log("error fetching quote cards number", error);
    }
  };

  const count = await fetchTotalQuoteCardsGenerated(); */

  return (
    <footer className="fixed bottom-14 lg:bottom-10 left-0 right-0 flex flex-col items-center z-[1] ">
      {/*  <TotalQuoteCardsGenerated count={count} /> */}
      <TotalQuoteCardsGenerated />

      <ul className="text-TEXT/60 hidden xl:flex xl:flex-col w-[600px] mx-auto items-center  space-y-1 rounded-xl mt-3">
        <li>
          AWS( GraphQL API + Lambda/node.js + DynamoDB + Next.js/Amplify )
        </li>
        <li>quotes from ZenQuotes; gradients from UIgradients</li>

        <li>
          leanred from Brian Hough, powered by{" "}
          <Link
            href={"https://youtube.com/@greybluesea"}
            target="_self"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            greybluesea
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

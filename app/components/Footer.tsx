"use client";

import Link from "next/link";
import TotalQuoteCardsGenerated from "./TotalQuoteCardsGenerated";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="fixed bottom-14 lg:bottom-10 left-0 right-0 flex flex-col items-center z-[1] ">
      <TotalQuoteCardsGenerated />
      <ul className="text-TEXT/60 hidden xl:flex xl:flex-col w-[500px]  mx-auto items-center  space-y-1 rounded-xl mt-3">
        <li>AWS( Lambda/node.js + GraphQL API + DynamoDB ) + Next.js</li>
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

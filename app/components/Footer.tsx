"use client";

import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  const [numberOfQuotesGenerated, setNumberOfQuotesGenerated] = useState(0);
  return (
    <footer className="fixed bottom-14 lg:bottom-10 left-0 right-0 flex flex-col items-center z-[1] ">
      <p className="text-BRAND text-xl">
        Quotes Generated: {numberOfQuotesGenerated}
      </p>
      <ul className="text-TEXT/60 hidden xl:flex xl:flex-col w-[500px]  mx-auto items-center  space-y-1 rounded-xl mt-3">
        <li>AWS( Lambda + Amplify + DynamoDB ) + GraphQL + Next.js</li>
        <li>quotes from ZenQuotes</li>

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

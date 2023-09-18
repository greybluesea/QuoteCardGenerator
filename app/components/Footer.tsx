"use client";

import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  const [numberOfQuotesGenerated, setNumberOfQuotesGenerated] = useState(0);
  return (
    <footer className=" fixed  bottom-14 lg:bottom-10 left-0 right-0 flex flex-col items-center z-[1] ">
      <p className="text-orange-500 text-xl">
        Quotes Generated: {numberOfQuotesGenerated}
      </p>
      <ul className="hidden lg:flex lg:flex-col w-[500px]  mx-auto items-center  space-y-1 rounded-xl mt-5">
        <li>AWS( Lambda + DynamoDB ) + GraphQL + Next.js</li>
        <li>leanred from Brian Hough</li>
        <li>
          powered by{" "}
          <Link
            href={"https://youtube.com/@greybluesea"}
            target="_self"
            rel="noopener noreferrer"
          >
            greybluesea
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

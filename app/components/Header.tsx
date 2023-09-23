import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="fixed  top-[3dvh] left-0 right-0 flex justify-center z-[1] ">
      <p className="hidden xl:block text-center max-w-4xl ">
        Fully deployed on AWS. When the main button on the home page is clicked,
        an event is sent to the backend GraphQL API, which triggers the Lambda
        function written in Node.js to fetch a random quote from ZenQuotes and a
        gradient background from UIgradient, then construct a quote card image
        using ‘sharp’ library, and finally export the image as a base64 string
        back to the frontend. The Lambda function will also update the ‘total
        quote cards generated’ count stored in DynamoDB in the meantime.
      </p>
    </header>
  );
};

export default Header;

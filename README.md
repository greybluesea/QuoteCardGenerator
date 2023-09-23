## Quote Card Generator - AWS(GraphQL API + Lambda/node.js + DynamoDB + Next.js/Amplify )

- AWS( GraphQL API + Lambda/node.js + DynamoDB + Next.js/Amplify )
- quotes from ZenQuotes; gradients from UIgradients
- leanred from Brian Hough, powered by greybluesea

Fully deployed on AWS. When the main button on the home page is clicked, an event is sent to the backend GraphQL API, which triggers the Lambda function written in Node.js to fetch a random quote from ZenQuotes and a gradient background from UIgradient, then construct a quote card image using ‘sharp’ library, and finally export the image as a base64 string back to the frontend. The Lambda function will also update the ‘total quote cards generated’ count stored in DynamoDB in the meantime.

Youtube: [https://www.youtube.com/watch?v=nnGg1Gmxhbc](https://www.youtube.com/watch?v=nnGg1Gmxhbc)

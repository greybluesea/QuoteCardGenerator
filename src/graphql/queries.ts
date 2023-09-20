/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuoteCardGeneratorData = /* GraphQL */ `
  query GetQuoteCardGeneratorData($id: ID!) {
    getQuoteCardGeneratorData(id: $id) {
      id
      queryName
      totalQuoteCardsGenerated
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuoteCardGeneratorData = /* GraphQL */ `
  query ListQuoteCardGeneratorData(
    $filter: ModelQuoteCardGeneratorDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuoteCardGeneratorData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        queryName
        totalQuoteCardsGenerated
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const quoteCardGeneratorQueryName = /* GraphQL */ `
  query QuoteCardGeneratorQueryName(
    $queryName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelQuoteCardGeneratorDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quoteCardGeneratorQueryName(
      queryName: $queryName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        queryName
        totalQuoteCardsGenerated
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const generateAQuoteCard = /* GraphQL */ `
  query GenerateAQuoteCard($input: AWSJSON!) {
    generateAQuoteCard(input: $input)
  }
`;

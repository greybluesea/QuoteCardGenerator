/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQuoteCardGeneratorDataInput = {
  id?: string | null,
  queryName: string,
  totalQuoteCardsGenerated: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelQuoteCardGeneratorDataConditionInput = {
  queryName?: ModelStringInput | null,
  totalQuoteCardsGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuoteCardGeneratorDataConditionInput | null > | null,
  or?: Array< ModelQuoteCardGeneratorDataConditionInput | null > | null,
  not?: ModelQuoteCardGeneratorDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type QuoteCardGeneratorData = {
  __typename: "QuoteCardGeneratorData",
  id: string,
  queryName: string,
  totalQuoteCardsGenerated: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQuoteCardGeneratorDataInput = {
  id: string,
  queryName?: string | null,
  totalQuoteCardsGenerated?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteQuoteCardGeneratorDataInput = {
  id: string,
};

export type ModelQuoteCardGeneratorDataFilterInput = {
  id?: ModelIDInput | null,
  queryName?: ModelStringInput | null,
  totalQuoteCardsGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuoteCardGeneratorDataFilterInput | null > | null,
  or?: Array< ModelQuoteCardGeneratorDataFilterInput | null > | null,
  not?: ModelQuoteCardGeneratorDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelQuoteCardGeneratorDataConnection = {
  __typename: "ModelQuoteCardGeneratorDataConnection",
  items:  Array<QuoteCardGeneratorData | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionQuoteCardGeneratorDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  queryName?: ModelSubscriptionStringInput | null,
  totalQuoteCardsGenerated?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuoteCardGeneratorDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuoteCardGeneratorDataFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateQuoteCardGeneratorDataMutationVariables = {
  input: CreateQuoteCardGeneratorDataInput,
  condition?: ModelQuoteCardGeneratorDataConditionInput | null,
};

export type CreateQuoteCardGeneratorDataMutation = {
  createQuoteCardGeneratorData?:  {
    __typename: "QuoteCardGeneratorData",
    id: string,
    queryName: string,
    totalQuoteCardsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuoteCardGeneratorDataMutationVariables = {
  input: UpdateQuoteCardGeneratorDataInput,
  condition?: ModelQuoteCardGeneratorDataConditionInput | null,
};

export type UpdateQuoteCardGeneratorDataMutation = {
  updateQuoteCardGeneratorData?:  {
    __typename: "QuoteCardGeneratorData",
    id: string,
    queryName: string,
    totalQuoteCardsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuoteCardGeneratorDataMutationVariables = {
  input: DeleteQuoteCardGeneratorDataInput,
  condition?: ModelQuoteCardGeneratorDataConditionInput | null,
};

export type DeleteQuoteCardGeneratorDataMutation = {
  deleteQuoteCardGeneratorData?:  {
    __typename: "QuoteCardGeneratorData",
    id: string,
    queryName: string,
    totalQuoteCardsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GenerateAQuoteCardQueryVariables = {
  input: string,
};

export type GenerateAQuoteCardQuery = {
  generateAQuoteCard?: string | null,
};

export type GetQuoteCardGeneratorDataQueryVariables = {
  id: string,
};

export type GetQuoteCardGeneratorDataQuery = {
  getQuoteCardGeneratorData?:  {
    __typename: "QuoteCardGeneratorData",
    id: string,
    queryName: string,
    totalQuoteCardsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuoteCardGeneratorDataQueryVariables = {
  filter?: ModelQuoteCardGeneratorDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuoteCardGeneratorDataQuery = {
  listQuoteCardGeneratorData?:  {
    __typename: "ModelQuoteCardGeneratorDataConnection",
    items:  Array< {
      __typename: "QuoteCardGeneratorData",
      id: string,
      queryName: string,
      totalQuoteCardsGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuoteCardGeneratorQueryNameQueryVariables = {
  queryName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteCardGeneratorDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuoteCardGeneratorQueryNameQuery = {
  quoteCardGeneratorQueryName?:  {
    __typename: "ModelQuoteCardGeneratorDataConnection",
    items:  Array< {
      __typename: "QuoteCardGeneratorData",
      id: string,
      queryName: string,
      totalQuoteCardsGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateQuoteCardGeneratorDataSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteCardGeneratorDataFilterInput | null,
};

export type OnCreateQuoteCardGeneratorDataSubscription = {
  onCreateQuoteCardGeneratorData?:  {
    __typename: "QuoteCardGeneratorData",
    id: string,
    queryName: string,
    totalQuoteCardsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuoteCardGeneratorDataSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteCardGeneratorDataFilterInput | null,
};

export type OnUpdateQuoteCardGeneratorDataSubscription = {
  onUpdateQuoteCardGeneratorData?:  {
    __typename: "QuoteCardGeneratorData",
    id: string,
    queryName: string,
    totalQuoteCardsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuoteCardGeneratorDataSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteCardGeneratorDataFilterInput | null,
};

export type OnDeleteQuoteCardGeneratorDataSubscription = {
  onDeleteQuoteCardGeneratorData?:  {
    __typename: "QuoteCardGeneratorData",
    id: string,
    queryName: string,
    totalQuoteCardsGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

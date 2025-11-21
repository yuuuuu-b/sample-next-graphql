import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Account = {
  __typename?: 'Account';
  accountCode: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
  accountName: Scalars['String']['output'];
  role: Role;
};

export type Query = {
  __typename?: 'Query';
  accounts?: Maybe<Array<Account>>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type AccountFragment = { __typename?: 'Account', accountId: string, accountCode: string, accountName: string, role: Role };

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = { __typename?: 'Query', accounts?: Array<{ __typename?: 'Account', accountId: string, accountCode: string, accountName: string, role: Role }> | null };

export const AccountFragmentDoc = gql`
    fragment Account on Account {
  accountId
  accountCode
  accountName
  role
}
    `;
export const AccountsDocument = gql`
    query accounts {
  accounts {
    ...Account
  }
}
    ${AccountFragmentDoc}`;

export function useAccountsQuery(options?: Omit<Urql.UseQueryArgs<AccountsQueryVariables>, 'query'>) {
  return Urql.useQuery<AccountsQuery, AccountsQueryVariables>({ query: AccountsDocument, ...options });
};
export const namedOperations = {
  Query: {
    accounts: 'accounts'
  },
  Fragment: {
    Account: 'Account'
  }
}
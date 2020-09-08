import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

/**
 * Instantiate required constructor fields
 */

const TypePolicy = {
  //we need to pass our unique identifier, and in our case it is label
  keyFields: ["edges", [["node", ["label"]]]],
};

const options = {
  //to customize the cache's behavior on a type-by-type basis
  typePolicies: {
    // the key should be __typename
    RootQueryToMenuItemConnection: TypePolicy,
  },
};

const cache = new InMemoryCache(options);
const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_MENU_ITEMS_URL,
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;

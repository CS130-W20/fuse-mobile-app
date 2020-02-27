
import React, { useEffect } from 'react';

import { AsyncStorage } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { AUTH_TOKEN, URL } from './src/constants';
import RootAppRouter from './src/navigation/RootAppRouter';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: URL,
});

const authLink = setContext((_, { headers }) => AsyncStorage.getItem(AUTH_TOKEN).then((token) => ({
  headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
  },
})));

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line no-console
    graphQLErrors.map(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    ));
  }

  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(errorLink.concat(link)),
});

export default function App() {
  useEffect(() => {
    const setup = async () => {
      // uncomment the line below to simulate entering the app from a logged out state
      // await AsyncStorage.clear();
    };
    setup();
  }, []);

  return (
    <ApolloProvider client={client}>
      {/* App entry point */}
      <RootAppRouter />
    </ApolloProvider>
  );
}


import React from 'react';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { URL } from './src/constants';
import RootAppRouter from './src/navigation/RootAppRouter';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: URL,
});

const client = new ApolloClient({
  cache,
  link,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      {/* App entry point */}
      <RootAppRouter />
    </ApolloProvider>
  );
}

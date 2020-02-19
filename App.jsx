import React from 'react';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';

import { URL } from './src/constants';
import LoggedIn from './src/screens/LoggedIn';

import store from './src/redux/store';

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
    <Provider store={store}>
      <ApolloProvider client={client}>
        {/* App entry point */}
        <LoggedIn />
      </ApolloProvider>
    </Provider>
  );
}

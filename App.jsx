import React from 'react';
import { Text, View } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import styles from './src/styles/Styles';
import { URL } from './src/constants';

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
      <View style={styles.container}>
        <Text>
          {'\n\n\n'}
          Replace this with the component you are testing
        </Text>
      </View>
    </ApolloProvider>
  );
}

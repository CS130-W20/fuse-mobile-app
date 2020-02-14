import React, { Component } from 'react';
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

class SetFuse extends Component{
  render(){
    return(
      <Text>Set Fuse Event Component</Text>
    );
  }
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <SetFuse></SetFuse>
        <Text>Hello</Text>
      </View>
    </ApolloProvider>
  );
}

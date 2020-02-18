import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import Login from './src/screens/Login';
// import Signup from './src/screens/Signup';
// import NewsFeed from './src/screens/Newsfeed';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://light-the-fuse.herokuapp.com/',
});

const client = new ApolloClient({
  cache,
  link,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Login />
      </View>
    </ApolloProvider>
  );
}

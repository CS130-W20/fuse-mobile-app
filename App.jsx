import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://light-the-fuse.herokuapp.com/',
});

const client = new ApolloClient({
  cache,
  link,
});

const PING_QUERY = gql`
  query pingQuery {
      ping
  }
`;

const ServerPong = () => {
  const { data, loading, error } = useQuery(PING_QUERY);

  if (loading) return <Text> LOADING... </Text>;
  if (error) return <Text>ERROR</Text>;
  if (!data) return <Text>Not found</Text>;

  console.log(data);

  return (
    <Text>
      {`Server has resonded: ${data.ping}`}
    </Text>
  );
};

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
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Yo does this even update?</Text>
        <ServerPong />
      </View>
    </ApolloProvider>
  );
}

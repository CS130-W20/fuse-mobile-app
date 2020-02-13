import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProfileContainer from './src/containers/ProfileContainer';


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

  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <Text>
      {`Server has resonded: ${data.ping}`}
    </Text>
  );
};

const PEOPLE_QUERY = gql`
    query peopleQuery {
        People {
            name
            age
        }
    }
`;

const People = () => {
  const { data, loading, error } = useQuery(PEOPLE_QUERY);

  if (loading) return <Text> LOADING... </Text>;
  if (error) return <Text>ERROR</Text>;
  if (!data) return <Text>Not found</Text>;

  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <>
      {data.People.map((person, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Text key={index}>
          {person.name}
          {' '}
          is
          {' '}
          {person.age}
          {' '}
          years old!
        </Text>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <ProfileContainer />
        <ServerPong />
        <People />
      </View>
    </ApolloProvider>
  );
}

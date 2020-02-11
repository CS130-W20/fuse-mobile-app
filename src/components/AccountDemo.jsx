import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Text } from 'react-native';
import React from 'react';

const PING_QUERY = gql`
    query pingQuery {
        ping
    }
`;

// eslint-disable-next-line no-unused-vars
const ServerPong = () => {
  const { data, loading, error } = useQuery(PING_QUERY);

  if (loading) return <Text> LOADING... </Text>;
  console.log(error);
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

// eslint-disable-next-line no-unused-vars
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

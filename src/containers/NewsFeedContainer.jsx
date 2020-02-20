import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import { useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import NewFuseButton from '../components/NewFuseButton';
import styles from './styles/NewsFeedContainerStyles';
import Spacer from '../helpers/Spacer';

const USER_QUERY = gql`
    query userQuery {
        user {
            id
            email
            name
        }
    }
`;

export default function ProfileContainer() {
  const client = useApolloClient();
  const { user } = client.readQuery({ query: USER_QUERY });

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <Text>{`Newsfeed for ${user.name}`}</Text>
        <Spacer padding={20} />
      </ScrollView>
      <NewFuseButton />
    </View>
  );
}

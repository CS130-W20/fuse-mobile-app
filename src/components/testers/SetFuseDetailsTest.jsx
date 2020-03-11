/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { EVENT } from '../../graphql/GeneralQueries';
import Spacer from '../../helpers/Spacer';

export default function SetFuseDetailsTest({ route }) {
  const { eventId } = route.params;
  const {
    data: eventQueryData,
    loading: eventQueryLoading,
    refetch: refetchEventQuery,
  } = useQuery(EVENT,
    {
      variables: {
        eventId,
      },
    });

  useEffect(() => {
    refetchEventQuery();
  }, []);

  useEffect(() => {
    if (eventQueryData && !eventQueryLoading) {
      // eslint-disable-next-line no-console
      console.log(eventQueryData);
    }
  }, [
    eventQueryData, eventQueryLoading,
  ]);

  if (!eventQueryData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.boldText}>ID: </Text>
        {eventId}
      </Text>
      <Text>
        <Text style={styles.boldText}>Title: </Text>
        {eventQueryData.event.title}
      </Text>
      <Text>
        <Text style={styles.boldText}>Description: </Text>
        {eventQueryData.event.description}
      </Text>
      <Text>
        <Text style={styles.boldText}>Owner: </Text>
        {eventQueryData.event.owner.name}
      </Text>
      <Text>
        <Text style={styles.boldText}>Invited: </Text>
        {eventQueryData.event.invited.map((invitee) => (
          <Text key={invitee.id}>
            {invitee.name}
            {', '}
          </Text>
        ))}
      </Text>
      <Text>
        <Text style={styles.boldText}>Joined: </Text>
        {eventQueryData.event.joined.map((joinee) => (
          <Text key={joinee.id}>
            {joinee.name}
            {', '}
          </Text>
        ))}
      </Text>
      <Text>
        <Text style={styles.boldText}>Created At: </Text>
        {Date(eventQueryData.event.createdAt)}
      </Text>
      <Spacer padding={40} />
      <TouchableOpacity>
        <Text>Join event</Text>
      </TouchableOpacity>
    </View>
  );
}

SetFuseDetailsTest.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // navigation: PropTypes.shape({
  //   navigate: PropTypes.func.isRequired,
  //   goBack: PropTypes.func.isRequired,
  // }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '700',
  },
});

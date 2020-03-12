import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import SetFuseDetails from '../components/SetFuseDetails';
import {
  EVENT,
} from '../graphql/GeneralQueries';

export default function EventDetailsContainer({ route, navigation }) {
  const { eventId } = route.params;

  const [invitedUsers, setInvitedUsers] = useState([]);
  const [joinedUsers, setJoinedUsers] = useState([]);

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
    // TODO disable when testing to enable fast reload
    refetchEventQuery();
  }, []);

  useEffect(() => {
    if (eventQueryData && !eventQueryLoading) {
      // eslint-disable-next-line no-console
      console.log(eventQueryData);

      setInvitedUsers(
        eventQueryData.event.invited.map((invitee) => ({
          id: invitee.id,
          name: invitee.name,
        })),
      );
      setJoinedUsers(
        eventQueryData.event.joined.map((joinee) => ({
          id: joinee.id,
          name: joinee.name,
        })),
      );
    }
  }, [
    eventQueryData, eventQueryLoading,
  ]);

  if (!eventQueryData) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SetFuseDetails
      eventId={eventId}
      title={eventQueryData.event.title}
      description={eventQueryData.event.description}
      owner={eventQueryData.event.owner}
      createdAt={eventQueryData.event.createdAt}
      invitedUsers={invitedUsers}
      joinedUsers={joinedUsers}
      refetchEvent={() => refetchEventQuery()}
      navigation={navigation}
    />
  );
}

EventDetailsContainer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

import React from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_FEED_QUERY } from '../graphql/GeneralQueries';

import NewFuseButton from '../components/NewFuseButton';
import EventTile from '../components/EventTile';
import styles from './styles/NewsFeedContainerStyles';
import Spacer from '../helpers/Spacer';

export default function ProfileContainer({ navigation }) {
  const {
    loading: newsFeedQueryLoading,
    error: newsFeedQueryError,
    data: newsFeedQueryData,
  } = useQuery(NEWS_FEED_QUERY);

  const eventStatusToInt = (status) => {
    switch (status) {
      case 'SET':
        return 0;
      case 'LIT':
        return 1;
      case 'COMPLETED':
        return 2;
      default:
        return -1;
    }
  };

  const eventTilesToRender = () => {
    if (newsFeedQueryLoading) {
      return <Text>Loading</Text>;
    }

    if (newsFeedQueryError) {
      return <Text>Error</Text>;
    }

    const eventTiles = newsFeedQueryData.newsFeed.map((event) => (
      <EventTile
        eventName={event.title}
        eventCreator={event.owner.name}
        description={event.description}
        eventStage={eventStatusToInt(event.status)}
        // TODO add appropriate relation, profile pic etc
        eventRelation={2}
        eventView={0}
        key={event.id}
      />
    ));
    return eventTiles;
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        {eventTilesToRender()}
        <Spacer padding={20} />
      </ScrollView>
      <NewFuseButton navigation={navigation} />
    </View>
  );
}

ProfileContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

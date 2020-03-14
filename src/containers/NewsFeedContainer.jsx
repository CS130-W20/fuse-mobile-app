import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_FEED_QUERY } from '../graphql/GeneralQueries';
import { wait } from '../helpers';

import NewFuseButton from '../components/NewFuseButton';
import EventTile from '../components/EventTile';
import styles from './styles/NewsFeedContainerStyles';
import Spacer from '../helpers/Spacer';

export default function NewsFeedContainer({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const {
    loading: newsFeedQueryLoading,
    error: newsFeedQueryError,
    data: newsFeedQueryData,
    refetch: refetchNewsFeed,
  } = useQuery(NEWS_FEED_QUERY);

  const refreshFeed = async () => {
    await refetchNewsFeed();
    await wait(500);
    setRefreshing(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFeed();
  };

  useEffect(() => {
    refetchNewsFeed();
  }, []);

  const eventTilesToRender = () => {
    if (newsFeedQueryLoading) {
      return <Text testID="newsfeedTile">Loading</Text>;
    }

    if (newsFeedQueryError) {
      return <Text testID="newsfeedTile">Error</Text>;
    }

    const eventTiles = newsFeedQueryData.newsFeed.map((event) => (
      <EventTile
        eventId={event.id}
        eventName={event.title}
        eventCreator={event.owner.name}
        eventCreatorId={event.owner.id}
        description={event.description}
        eventStage={event.status}
        // TODO add appropriate relation, profile pic etc
        eventRelation={0}
        key={event.id}
        testID="newsfeedTile"
        navigation={navigation}
      />
    ));
    return eventTiles;
  };

  return (
    <View style={styles.wrapper} testID="newsfeed">
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
      >
        {eventTilesToRender()}
        <Spacer padding={20} />
      </ScrollView>
      <NewFuseButton navigation={navigation} testID="addEventButton" />
      {/* Uncomment the next line to test image upload */}
      {/* <ImageUploadButton /> */}
    </View>
  );
}

NewsFeedContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

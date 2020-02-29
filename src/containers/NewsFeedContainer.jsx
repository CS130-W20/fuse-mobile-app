import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import NewFuseButton from '../components/NewFuseButton';
import EventTile from '../components/EventTile';
import styles from './styles/NewsFeedContainerStyles';
import Spacer from '../helpers/Spacer';

export default function ProfileContainer({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <EventTile
          eventName="Event Name"
          eventCreator="Chiara Mooney"
          description="Here is my event description. Wow this is so interesting. I am so excited about this. Let me try to make this longer."
          eventStage={0}
          eventRelation={2}
        />
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

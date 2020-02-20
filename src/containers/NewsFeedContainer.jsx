import React, { PureComponent } from 'react';
import {
  // Text,
  View,
  ScrollView,
} from 'react-native';

import NewFuseButton from '../components/NewFuseButton';
import EventTile from '../components/EventTile';
import styles from './styles/NewsFeedContainerStyles';
import Spacer from '../helpers/Spacer';

export default class NewsFeedContainer extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <EventTile
            eventName="Event Name"
            eventCreator="Chiara Mooney"
            description="Here is my event description. Wow this is so interesting. I am so excited about this. Let me try to make this longer."
            eventStage={0}
          />
          <Spacer padding={20} />
        </ScrollView>
        <NewFuseButton />
      </View>
    );
  }
}

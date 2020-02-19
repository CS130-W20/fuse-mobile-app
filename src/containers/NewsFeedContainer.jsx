import React, { PureComponent } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import NewFuseButton from '../components/NewFuseButton';
import styles from './styles/NewsFeedContainerStyles';
import Spacer from '../helpers/Spacer';

export default class ProfileContainer extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <Text>NewsFeedPage?</Text>
          <Spacer padding={20} />
        </ScrollView>
        <NewFuseButton />
      </View>
    );
  }
}

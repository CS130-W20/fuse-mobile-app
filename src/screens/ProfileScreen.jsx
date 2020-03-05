import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import ProfileContainer from '../containers/ProfileContainer';
import SettingsHeaderButton from '../components/SettingsHeaderButton';
import styles from './styles/ProfileScreenStyles';

export const profileHeaderOptions = {
  headerShown: false,
  // headerTitle: 'fuse',
  // headerRight: SettingsHeaderButton,
};

function Header({ navigation }) {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerProtectiveArea} />
      <View style={styles.headerContent}>
        <View style={styles.headerLeftWrapper} />
        <View style={styles.headerCenterWrapper} />
        <View style={styles.headerRightWrapper}>
          <SettingsHeaderButton navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <Header navigation={navigation} />
      <ProfileContainer navigation={navigation} />
    </View>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

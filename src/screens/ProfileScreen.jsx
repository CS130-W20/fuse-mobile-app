import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';

import { USER_QUERY } from '../graphql/GeneralQueries';
import { ProfileParams } from '../constants';
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
          <SettingsHeaderButton navigation={navigation} testID="userSettings" />
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen({ navigation, route }) {
  let profileId;
  const client = useApolloClient();
  const parentNavigator = navigation.dangerouslyGetParent();

  if (
    parentNavigator
    && parentNavigator.dangerouslyGetState()
    && parentNavigator.dangerouslyGetState().routeNames
  ) {
    const { me: currentUser } = client.readQuery({ query: USER_QUERY });
    profileId = currentUser.id;
    // console.log("opened via tab navigator");
  } else {
    profileId = route.params[ProfileParams.profileId];
    // console.log("Opened via some random way", profileId);
  }

  return (
    <View style={styles.wrapper}>
      <Header navigation={navigation} />
      <ProfileContainer navigation={navigation} profileId={profileId} />
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
    dangerouslyGetParent: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FuseSubmitButton from '../components/FuseSubmitButton';

import Spacer from '../helpers/Spacer';
import styles from './styles/ScoreScreenStyles';

export default function ScoreScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bodyWrapper}>
        <MaterialCommunityIcons name="fire" style={styles.icon} />
        <Text style={styles.scoreText}>{route.params.score}</Text>
        <Spacer padding={10} />
        <Text style={styles.titleText}>sparks earned!</Text>
      </View>
      <TouchableOpacity style={styles.goBack}>
        <FuseSubmitButton
          buttonName="Finish"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
    </View>
  );
}

ScoreScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      score: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

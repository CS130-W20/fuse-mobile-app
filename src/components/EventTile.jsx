import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import { PropTypes } from 'prop-types';
import Spacer from '../helpers/Spacer';
import styles from './styles/EventTileStyles';
import FuseTileButton from './FuseTileButton';

const litOmbre = require('../assets/images/litombre.png');
const sampleImage = require('../assets/peter.png');

const button1 = 'JOIN';
const button2 = 'ATTENDEES';


export default class EventTile extends PureComponent {
  render() {
    const {
      eventName,
      eventCreator,
      description,
      // eventStage,
    } = this.props;

    return (
      <View style={styles.outerTile}>
        <ImageBackground source={litOmbre} style={styles.backgroundOmbre} resizeMode="cover" borderRadius={18}>
          <View style={styles.innterTile}>
            <View style={styles.upperHeader}>
              <View style={styles.profileColumn}>
                <Spacer padding={10} />
                <Image source={sampleImage} style={styles.profileImage} />
              </View>
              <View style={styles.titleColumn}>
                <Spacer padding={10} />
                <Text style={styles.eventName}>{eventName}</Text>
                <Text style={styles.eventCreator}>{eventCreator}</Text>
              </View>
            </View>
            <View style={styles.middleHeader}>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.bottomHeader}>
              <Spacer padding={10} />
              <FuseTileButton buttonName={button1} />
              <Spacer padding={10} />
              <FuseTileButton buttonName={button2} />
              <Spacer padding={10} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

EventTile.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventCreator: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eventStage: PropTypes.number.isRequired,
};

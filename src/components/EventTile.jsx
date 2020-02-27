import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import { PropTypes } from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from '../helpers/Spacer';
import styles from './styles/EventTileStyles';
import FuseTileButton from './FuseTileButton';

const litOmbre = require('../assets/images/litombre.png');
const setOmbre = require('../assets/images/setombre.png');
const completedOmbre = require('../assets/images/completeombre.png');
const sampleImage = require('../assets/peter.png');

export default class EventTile extends PureComponent {
  showButtons() {
    let button1 = '';
    let button2 = '';
    let button3 = '';
    const { eventStage } = this.props;
    const { eventRelation } = this.props;
    switch (eventStage) {
      case 0: // lit tiles
        switch (eventRelation) {
          case 0: // creator
            button1 = 'LIGHT';
            button2 = 'ATTENDEES';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
              </View>
            );
          case 1: // joined
            button1 = 'ATTENDEES';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
              </View>
            );
          case 2: // invited
            button1 = 'JOIN';
            button2 = 'ATTENDEES';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
              </View>
            );
          case 3: // unaffiliated
          default:
            return (<View />);
        }
      case 1: // set tiles
        switch (eventRelation) {
          case 0: // owner
          case 1: // joined
            button1 = 'SCHEDULE';
            button2 = 'ATTENDEES';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
              </View>
            );
            // NEED TO ADD CASE FOR AFTER SCHEDULE BEFORE COMPLETE
          case 2: // invited
          case 3: // unaffiliated
          default:
            return (<View />);
        }
      case 2: // completed tiles
        switch (eventRelation) {
          case 0: // owner
          case 1: // joined
            button1 = 'DETAILS';
            button2 = 'ATTENDEES';
            button3 = 'LIKE'; // ADD DIFFERENT STLYING LATER
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
                <FuseTileButton buttonName={button3} />
              </View>
            );
          case 2: // invited
          case 3: // unaffiliated
            button1 = 'DETAILS';
            button2 = 'LIKE'; // ADD DIFFERENT STLYING LATER
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
              </View>
            );
          default:
            return (<View />);
        }
      default:
        return (<View />);
    }
  }

  showTileContents() {
    const { eventName } = this.props;
    const { eventCreator } = this.props;
    const { description } = this.props;
    return (
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
        {this.showButtons()}
      </View>
    );
  }

  showTile() {
    const { eventStage } = this.props;
    switch (eventStage) {
      case 0:
        return (
          <ImageBackground source={litOmbre} style={styles.backgroundOmbre} resizeMode="cover" borderRadius={18}>
            {this.showTileContents()}
          </ImageBackground>
        );
      case 1:
        return (
          <ImageBackground source={setOmbre} style={styles.backgroundOmbre} resizeMode="cover" borderRadius={18}>
            {this.showTileContents()}
          </ImageBackground>
        );
      case 2:
        return (
          <ImageBackground source={completedOmbre} style={styles.backgroundOmbre} resizeMode="cover" borderRadius={18}>
            {this.showTileContents()}
          </ImageBackground>
        );
      default:
        return <View />;
    }
  }

  render() {
    const {
      // eslint-disable-next-line no-unused-vars
      eventName,
      // eslint-disable-next-line no-unused-vars
      eventCreator,
      // eslint-disable-next-line no-unused-vars
      description,
      // eslint-disable-next-line no-unused-vars
      eventStage, // 0: lit, 1: set, 2: complete
      // eslint-disable-next-line no-unused-vars
      eventRelation, // 0: creator, 1: joined, 2: invited, 3: unaffiliated
    } = this.props;
    return (
      <TouchableOpacity style={styles.outerTile}>
        {this.showTile()}
      </TouchableOpacity>
    );
  }
}

EventTile.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventCreator: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  eventStage: PropTypes.number.isRequired,
  eventRelation: PropTypes.number.isRequired,
};

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
import { EVENTSTATUS } from '../constants';

const litOmbre = require('../assets/images/litombre.png');
const setOmbre = require('../assets/images/setombre.png');
const completedOmbre = require('../assets/images/completeombre.png');
const sampleImage = require('../assets/peter.png');

export default class EventTile extends PureComponent {
  showButtons() {
    let button1 = '';
    let button2 = '';
    // eslint-disable-next-line no-unused-vars
    const { testID } = this.props;
    const { eventStage } = this.props;
    const { eventRelation } = this.props;
    switch (eventStage) {
      case EVENTSTATUS.set: // lit tiles
        switch (eventRelation) {
          case 0: // creator
            button1 = 'LIGHT';
            button2 = 'DETAILS';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
              </View>
            );
          case 1: // joined
            button1 = 'DETAILS';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
              </View>
            );
          case 2: // invited
            button1 = 'JOIN';
            button2 = 'DETAILS';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
              </View>
            );
          case 3: // unaffiliated
            button1 = 'DETAILS';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
              </View>
            );
          default:
            return (<View />);
        }
      case EVENTSTATUS.lit: // set tiles
        switch (eventRelation) {
          case 0: // owner
          case 1: // joined
            button1 = 'SCHEDULE';
            button2 = 'DETAILS';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
              </View>
            );
            // NEED TO ADD CASE FOR AFTER SCHEDULE BEFORE COMPLETE
          case 2: // invited
          case 3: // unaffiliated
            button1 = 'DETAILS';
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
              </View>
            );
          default:
            return (<View />);
        }
      case EVENTSTATUS.completed: // completed tiles
        switch (eventRelation) {
          case 0: // owner
          case 1: // joined
            button1 = 'DETAILS';
            button2 = 'LIKE'; // ADD DIFFERENT STLYING LATER
            return (
              <View style={styles.bottomHeader}>
                <FuseTileButton buttonName={button1} />
                <FuseTileButton buttonName={button2} />
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
    const creatorText = 'by ';
    return (
      <View style={styles.innterTile}>
        <View style={styles.upperHeader}>
          <View style={styles.profileColumn}>
            <Spacer padding={10} />
            <Image source={sampleImage} style={styles.profileImage} />
          </View>
          <View style={styles.titleColumn}>
            <Spacer padding={10} />
            <Text numberOfLines={2} style={styles.eventName}>{eventName}</Text>
            <Text numberOfLines={1} style={styles.eventCreator}>
              {creatorText}
              {eventCreator}
            </Text>
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
      case EVENTSTATUS.set:
        return (
          <ImageBackground source={litOmbre} style={styles.backgroundOmbre} resizeMode="cover" borderRadius={18}>
            {this.showTileContents()}
          </ImageBackground>
        );
      case EVENTSTATUS.lit:
        return (
          <ImageBackground source={setOmbre} style={styles.backgroundOmbre} resizeMode="cover" borderRadius={18}>
            {this.showTileContents()}
          </ImageBackground>
        );
      case EVENTSTATUS.completed:
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
      eventStage, // 0: set, 1: lit, 2: complete
      // eslint-disable-next-line no-unused-vars
      eventRelation, // 0: creator, 1: joined, 2: invited, 3: unaffiliated
      // eslint-disable-next-line no-unused-vars
      testID,
    } = this.props;
    return (
      <View style={styles.outerTile} testID={testID}>
        {this.showTile()}
      </View>
    );
  }
}

EventTile.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventCreator: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  eventStage: PropTypes.string.isRequired,
  eventRelation: PropTypes.number.isRequired,
  testID: PropTypes.string.isRequired,
};

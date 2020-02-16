import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';

export default class Spacer extends PureComponent {
  render() {
    const { padding } = this.props;
    return (
      <View style={{ paddingTop: padding }} />
    );
  }
}

Spacer.propTypes = {
  padding: PropTypes.number.isRequired,
};

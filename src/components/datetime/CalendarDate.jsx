import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accentred,
    borderRadius: 5,
    // borderWidth: 2,
    // borderColor: colors.ac,
    height: 70,
    width: 60,
    padding: 10,
  },
  dayWrapper: {
    // backgroundColor: 'lightblue',
    flex: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '500',
  },
  monthWrapper: {
    // backgroundColor: 'lightgreen',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    color: colors.white,
    fontSize: 18,
  },
});

const monthNumToStr = [
  'JAN', 'FEB', 'MAR', 'APR',
  'MAY', 'JUN', 'JUL', 'AUG',
  'SEPT', 'OCT', 'NOV', 'DEC',
];

export default function CalendarDate({ month, day }) {
  let monthText;
  let dayText;

  if (month === -1 && day === -1) {
    monthText = '';
    dayText = '-';
  } else {
    monthText = monthNumToStr[month - 1];
    dayText = day;
  }

  return (
    <View style={styles.container}>
      <View style={styles.monthWrapper}>
        <Text style={styles.monthText}>{monthText}</Text>
      </View>
      <View style={styles.dayWrapper}>
        <Text style={styles.dayText}>{dayText}</Text>
      </View>
    </View>
  );
}

CalendarDate.defaultProps = {
  month: -1,
  day: -1,
};

CalendarDate.propTypes = {
  month: PropTypes.number,
  day: PropTypes.number,
};

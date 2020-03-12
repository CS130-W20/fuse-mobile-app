import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
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
  icon: {
    fontSize: 30,
    color: colors.white,
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default function CalendarDate({
  date, canEdit, onDateChange,
}) {
  let monthText;
  let dayText;

  if (!date) {
    monthText = '';
    dayText = '-';
  } else {
    const parsedDate = new Date(date);
    monthText = monthNumToStr[parsedDate.getMonth()];
    dayText = parsedDate.getDate();
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    onDateChange(selectedDate);
    hideDatePicker();
  };

  const onPress = () => {
    showDatePicker();
  };

  const monthDateView = () => (
    <>
      <View style={styles.monthWrapper}>
        <Text style={styles.monthText}>{monthText}</Text>
      </View>
      <View style={styles.dayWrapper}>
        <Text style={styles.dayText}>{dayText}</Text>
      </View>
    </>
  );

  if (!canEdit) {
    return (
      <View style={styles.container}>
        {monthDateView()}
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      {/* If there is no date, then show the + symbol which requires a
      different container style */}
      {
        date != null
          ? monthDateView()
          : (
            <View style={styles.iconWrapper}>
              <Feather name="plus" style={styles.icon} />
            </View>
          )
      }
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(selectedDate) => handleConfirm(selectedDate)}
        onCancel={() => hideDatePicker()}
      />
    </TouchableOpacity>
  );
}

CalendarDate.defaultProps = {
  date: null,
  canEdit: false,
  onDateChange: () => {},
};

CalendarDate.propTypes = {
  date: PropTypes.string,
  canEdit: PropTypes.bool,
  onDateChange: PropTypes.func,
};

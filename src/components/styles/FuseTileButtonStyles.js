import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  buttonText: {
    color: colors.grey,
    fontSize: 14,
  },
  buttonWrapper: {
    height: 30,
    width: 130,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

export default styles;

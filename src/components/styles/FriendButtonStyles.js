import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    fontSize: 14,
  },
  buttonWrapper: {
    backgroundColor: colors.accentred,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    color: colors.white,
    fontSize: 16,
    paddingRight: 5,
  },
  requestedButton: {
    backgroundColor: colors.grey,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  newFuseIcon: {
    color: colors.white,
    fontSize: 24,
  },
  newFuseWrapper: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 65,
    height: 65,
    borderRadius: 55,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.redorange,
  },
});

export default styles;

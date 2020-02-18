import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  focusedViewSelector: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.redorange,
    borderBottomWidth: 3,
  },
  selectorText: {
    color: colors.grey,
    fontSize: 12,
    fontWeight: '600',
  },
  selectorWrapper: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  unfocusedViewSelector: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 3,
  },
  wrapper: {
    // backgroundColor: 'lightcyan',
    flex: 1,
    width: '100%',
  },
});

export default styles;

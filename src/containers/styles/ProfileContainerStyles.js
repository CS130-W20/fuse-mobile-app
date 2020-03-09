import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  dummyView: {
    backgroundColor: colors.white,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    height: 100,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
  },
  tileWrapper: {
    alignItems: 'center',
  },
});

export default styles;

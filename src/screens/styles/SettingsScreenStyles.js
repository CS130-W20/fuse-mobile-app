import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  sectionHeaderText: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    color: colors.grey,
  },
  tileText: {
    fontSize: 14,
  },
  tileWrapper: {
    // backgroundColor: 'salmon',
    height: 60,
    justifyContent: 'center',
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 1,
  },
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
});

export default styles;

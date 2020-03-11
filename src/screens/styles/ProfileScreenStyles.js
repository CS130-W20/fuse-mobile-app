import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: colors.white,
    height: 90,
  },
  headerCenterWrapper: {
    // backgroundColor: 'grey',
    flex: 1,
  },
  headerContent: {
    // backgroundColor: 'lightpink',
    flex: 1,
    flexDirection: 'row',
  },
  headerLeftWrapper: {
    // backgroundColor: 'white',
    width: 60,
  },
  headerProtectiveArea: {
    // backgroundColor: 'red',
    height: 40,
  },
  headerRightWrapper: {
    // backgroundColor: 'teal',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
});

export default styles;

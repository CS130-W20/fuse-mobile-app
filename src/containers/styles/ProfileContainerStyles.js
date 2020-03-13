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
  friendButtonWrapper: {
    // backgroundColor: 'grey',
    alignItems: 'flex-end',
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
  headerWrapper: {
    backgroundColor: colors.white,
    height: 90,
  },
  headerBackButton: {
    // color: colors.black,
    fontSize: 30,
    textAlign: 'center',
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
    backgroundColor: colors.white,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default styles;

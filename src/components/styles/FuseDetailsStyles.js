import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  actionButtonsWrapper: {
    // backgroundColor: 'grey',
    alignItems: 'center',
    width: '100%',
  },
  backButton: {
    color: colors.black,
    fontSize: 30,
    textAlign: 'center',
  },
  bodyWrapper: {
    margin: 20,
    flex: 1,
  },
  centerHeaderWrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
    borderRadius: 30,
    display: 'flex',
  },
  descriptionWrapper: {
  },
  descriptionText: {
    fontSize: 16,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  header: {
    backgroundColor: colors.background,
    height: 100,
    paddingTop: 30,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    color: colors.black,
    fontSize: 30,
    textAlign: 'center',
  },
  leftHeaderWrapper: {
    width: 40,
    paddingLeft: 10,
  },
  ownerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  ownerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 50,
    marginRight: 10,
  },
  rightHeaderWrapper: {
    width: 40,
  },
  scheduleTimeText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '400',
    color: colors.black,
  },
  scheduleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: '700',
  },
  timeText: {
    color: colors.textgrey,
  },
  titleWrapper: {
    // backgroundColor: colors.accentred,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '700',
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  bio: {
    textAlign: 'right',
  },
  bioWrapper: {
    // backgroundColor: 'lightcoral',
  },
  friendsAndEventsBold: {
    fontWeight: '700',
    color: colors.black,
  },
  friendsAndEventsLabels: {
    textAlign: 'right',
    fontSize: 15,
    color: colors.grey,
  },
  friendsAndEventsWrapper: {
    // backgroundColor: 'lightpink',
  },
  lowerHeader: {
    height: 25,
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'right',
  },
  nameWrapper: {
    // backgroundColor: 'lightsalmon',
  },
  profilePicColumn: {
    // backgroundColor: 'skyblue',
    flex: 2,
    padding: 5,
    paddingTop: 20,
  },
  profileImage: {
    // backgroundColor: 'grey',
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  // container for where the image will go
  profilePicWrapper: {
    // backgroundColor: 'orange',
    width: '100%',
    aspectRatio: 1,
  },
  scoreEllipse: {
    flex: 1,
    width: 60,
    height: 30,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.41,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  scoreText: {
    // backgroundColor: 'lightcoral',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: colors.redorange,
  },
  scoreWrapper: {
    // backgroundColor: 'lightgrey',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  textColumn: {
    // backgroundColor: 'powderblue',
    flex: 3,
    padding: 5,
    paddingTop: 20,
  },
  upperHeader: {
    // backgroundColor: 'lightgrey',
    display: 'flex',
    height: 175,
    flexDirection: 'row',
  },
  wrapper: {
    // backgroundColor: 'honeydew',
    display: 'flex',
    height: 200,
  },
});

export default styles;

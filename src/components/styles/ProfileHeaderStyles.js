import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bio: {
    textAlign: 'right',
  },
  bioWrapper: {
    // backgroundColor: 'lightcoral',
  },
  friendsAndEvents: {
    textAlign: 'right',
    fontWeight: '700',
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

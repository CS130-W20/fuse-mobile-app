import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  eventName: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  eventCreator: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.textgrey,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.textgrey,
  },
  upperHeader: {
    // backgroundColor: 'lightgrey',
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    flex: 3,
  },
  profileColumn: {
    // backgroundColor: 'blue',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  profileImage: {
    backgroundColor: 'grey',
    flex: 1,
    width: 50,
    height: 50,
    // width: '100%',
    borderRadius: 25,
    resizeMode: 'contain',
    margin: 5,
  },
  titleColumn: {
    // backgroundColor: 'green',
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    // backgroundColor: 'red',
    margin: 5,
  },
  middleHeader: {
    // backgroundColor: 'grey',
    display: 'flex',
    height: 50,
    flexDirection: 'column',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHeader: {
    // backgroundColor: 'red',
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-evenly',
  },
  innterTile: {
    display: 'flex',
    height: 190,
    width: 280,
    borderRadius: 18,
    backgroundColor: colors.background,

  },
  outerTile: {
    display: 'flex',
    height: 200,
    width: 300,
    borderRadius: 18,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  backgroundOmbre: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;

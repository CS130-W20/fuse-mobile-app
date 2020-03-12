import {
  StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  trim: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    margin: '5%',
    height: '100%',
    backgroundColor: colors.background,
    borderRadius: 30,
    display: 'flex',
  },
  upperheader: {
    flex: 1,
    // backgroundColor: 'pink',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftHeaderWrapper: {
    width: 40,
    // backgroundColor: 'lightblue',
  },
  rightHeaderWrapper: {
    width: 40,
    // backgroundColor: 'lightblue',
  },
  centerHeaderWrapper: {
    flex: 1,
    // backgroundColor: 'lightgreen',
  },
  back: {
    color: colors.black,
    fontSize: 40,
    textAlign: 'center',
  },
  set: {
    color: colors.black,
    fontSize: 50,
    // height: 50,
    // flex: 2,
    textAlign: 'center',
    fontWeight: '500',
  },
  middleHeader: {
    flex: 4,
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  nameInput: {
    margin: 11,
  },
  image: {
    bottom: 40,
    left: '85%',
    width: 88,
    height: 78,
    transform: [
      {
        rotate: '15.00deg',
      },
    ],
  },
  friendContainer: {
    top: 20,
    borderBottomWidth: 2,
    paddingBottom: 15,
    borderBottomColor: 'rgba(220,220,230,1)',
    width: '95%',
  },
  friendListWrapper: {
    padding: 11,
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    margin: 11,
    alignItems: 'center',
  },
  deadline: {
    color: colors.black,
    fontSize: 16,
  },
  dateWrapper: {
    color: colors.black,
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgba(220,220,230,1)',
    padding: 10,
  },
  deadlineWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 11,
    alignItems: 'center',
  },
  dateWrapper: {
    color: colors.black,
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgba(220,220,230,1)',
    padding: 10,
  },
  deadlineWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 11,
    alignItems: 'center',
  },
  lowerHeader: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
  },
  light: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(247,116,33,1)',
  },
  edit: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#ed5c45',
  },
});

export default styles;

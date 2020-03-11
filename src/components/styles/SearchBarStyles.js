import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,1)',
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowColor: '#111',
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    justifyContent: 'center',
  },
  rect1: {
    width: 367,
    height: 48,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    alignSelf: 'center',
  },
  leftIconButton: {
    padding: 3,
    marginTop: 5,
  },
  leftIcon2: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
    opacity: 0.6,
  },
  inputStyle: {
    width: 257,
    height: 48,
    color: '#000',
    alignSelf: 'flex-start',
    paddingRight: 5,
    fontSize: 16,
    lineHeight: 16,
    marginLeft: 21,
  },
  leftIconButtonRow: {
    height: 48,
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 4,
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  rightIconButton: {
    alignItems: 'center',
    padding: 3,
    marginRight: 5,
    marginTop: 5,
  },
  rightIcon2: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
    opacity: 0.6,
  },
});

export default styles;

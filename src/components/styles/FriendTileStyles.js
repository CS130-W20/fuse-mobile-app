import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  outerTile: {
    display: 'flex',
    height: 50,
    width: 400,
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    backgroundColor: 'grey',
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  username: {
    textAlign: 'left',
    fontSize: 14,
    color: colors.black,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default styles;

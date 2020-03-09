import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  outerTile: {
    display: 'flex',
    height: 40,
    width: 400,
    backgroundColor: colors.white,
    justifyContent: 'center',
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

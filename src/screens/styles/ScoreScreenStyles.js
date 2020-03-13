import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  bodyWrapper: {
    flex: 1,
    backgroundColor: colors.accentred,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.accentred,
  },
  goBack: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.sizzlefuseyellow,
    fontSize: 88,
  },
  scoreText: {
    color: colors.white,
    fontSize: 100,
    fontWeight: '700',
  },
  titleText: {
    color: colors.white,
    fontSize: 26,
    fontWeight: '700',
  },
});

export default styles;

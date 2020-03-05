import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  fieldInput: {
  },
  fieldInputWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  fieldLabel: {
    fontWeight: '500',
  },
  fieldLabelWrapper: {
    // backgroundColor: 'lightblue',
    width: 50,
    paddingTop: 10,
    justifyContent: 'center',
  },
  fieldWrapper: {
    // backgroundColor: colors.accentred,
    height: 80,
  },
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
});

export default styles;

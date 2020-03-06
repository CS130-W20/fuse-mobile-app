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
    fontSize: 16,
    fontWeight: '700',
  },
  fieldLabelWrapper: {
    paddingTop: 10,
    justifyContent: 'center',
  },
  fieldWrapper: {
    // backgroundColor: colors.accentred,
    height: 100,
  },
  saveButton: {
  },
  saveButtonText: {
    color: colors.accentred,
    fontSize: 16,
    fontWeight: '700',
  },
  saveButtonWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
});

export default styles;

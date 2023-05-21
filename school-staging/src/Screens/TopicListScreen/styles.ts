import {fontFamilies, fontSizes} from '@Themes/Fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

export default StyleSheet.create({
  container: {
    backgroundColor: 'Black',
    flex: 1,
  },
  text: {
    marginHorizontal: 5,
    height: 40,
    width: '80%',
    color: Colors.grey2,
    justifyContent: 'center',
    fontFamily: fontFamilies.primaryRegular,
    fontSize: fontSizes.md,
  },
  searchBar: {},
  selected: {
    borderRadius: 222,
    backgroundColor: '#ffffff',
  },
  loading: {
    marginTop: 20,
  },
  regularText: {
    fontWeight: '500',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#FFEADC',
  },
});

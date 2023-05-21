import {fontFamilies} from '@Themes/Fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

export default StyleSheet.create({
  nameInput: {
    width: '100%',
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 0,
    borderWidth: 0.5,
    borderColor: Colors.gray3,
    paddingVertical: 0,
  },
  updateButton: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  updateText: {
    fontFamily: fontFamilies.primarySemiBold,
  },
});

import {fontFamilies, fontSizes} from '@Themes/Fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

// const {width} = Dimensions.get('window');

export default StyleSheet.create({
  logoutButton: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  updateButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  updateText: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.primarySemiBold,
    color: Colors.primary,
  },
  logoutText: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.primaryBold,
  },
});

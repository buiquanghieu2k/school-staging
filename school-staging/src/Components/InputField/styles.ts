import {StyleSheet, Dimensions} from 'react-native';

import {fontFamilies, fontSizes} from '@Themes/Fonts';

const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  textField: {
    paddingHorizontal: 20,
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.primaryRegular,
    maxHeight: height / 3,
    color: 'black',
  },
});

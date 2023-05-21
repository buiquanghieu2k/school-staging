import {fontFamilies, fontSizes} from '@Themes/Fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

export default StyleSheet.create({
  calendar: {
    borderRadius: 6,
  },
  dashedLine: {
    marginVertical: 16,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  calendarHeader: {
    paddingBottom: 4,
    justifyContent: 'space-around',
    borderBottomWidth: 0.8,
    borderColor: Colors.primary,
    borderStyle: 'dashed',
  },
  historyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  historyText: {
    fontFamily: fontFamilies.primaryRegular,
    fontSize: fontSizes.sm,
    color: Colors.primary,
  },
});

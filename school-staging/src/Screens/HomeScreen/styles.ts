import {getBottomBarHeight} from '@Utils/utils';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

export default StyleSheet.create({
  viewContainer: {
    paddingBottom: getBottomBarHeight(),
  },
  scrollView: {
    backgroundColor: Colors.backgroundMain,
  },
});

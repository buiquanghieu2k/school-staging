import {fontFamilies, fontSizes} from '@Themes/Fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

export default StyleSheet.create({
  forgetButton: {
    maxWidth: '40%',
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
  },
  forGetButtonText: {
    color: Colors.primary,
    fontFamily: fontFamilies.primaryRegular,
    fontSize: fontSizes.sm,
    fontWeight: '500',
  },
  loginButton: {
    marginTop: 8,
    alignSelf: 'center',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 15,
  },
  loginButtonText: {
    fontFamily: fontFamilies.primaryRegular,
    fontSize: fontSizes.lg,
    fontWeight: '700',
    color: Colors.white,
    paddingVertical: 12,
  },
  registerButton: {
    paddingVertical: 6,
  },
  registerButtonText: {
    color: Colors.primary,
  },
  guestButton: {
    paddingVertical: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  guestButtonText: {
    color: Colors.primary,
    fontFamily: fontFamilies.primaryRegular,
    fontSize: fontSizes.xs,
  },
  hotlineButton: {
    paddingVertical: 6,
  },
  hotlineButtonText: {
    color: Colors.primary,
    fontFamily: fontFamilies.primarySemiBold,
    fontSize: fontSizes.md,
  },
});

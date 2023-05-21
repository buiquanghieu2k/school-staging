import {Typography} from 'react-native-ui-lib';
import {fontFamilies, fontSizes} from './Fonts';

Typography.loadTypographies({
  primaryThin: {
    fontFamily: fontFamilies.primaryThin,
  },
  primaryLight: {
    fontFamily: fontFamilies.primaryLight,
  },
  primaryMedium: {
    fontFamily: fontFamilies.primaryMedium,
  },
  primaryRegular: {
    fontFamily: fontFamilies.primaryRegular,
  },
  primarySemiBold: {
    fontFamily: fontFamilies.primarySemiBold,
  },
  primaryBold: {
    fontFamily: fontFamilies.primaryBold,
  },
  primaryExtraBold: {
    fontFamily: fontFamilies.primaryExtraBold,
  },
  tiny: {
    fontSize: fontSizes.tiny,
    lineHeight: 12,
  },
  xxss: {
    fontSize: fontSizes.xxss,
    lineHeight: 16,
  },
  xxs: {
    fontSize: fontSizes.xxs,
    lineHeight: 20,
  },
  xs: {
    fontSize: fontSizes.xs,
    lineHeight: 20,
  },
  sm: {
    fontSize: fontSizes.sm,
    lineHeight: 20,
  },
  md: {
    fontSize: fontSizes.md,
    lineHeight: 25,
  },
  lg: {
    fontSize: fontSizes.lg,
    lineHeight: 30,
  },
  xl: {
    fontSize: fontSizes.xl,
    lineHeight: 35,
  },
  xxl: {
    fontSize: fontSizes.xxl,
    lineHeight: 40,
  },
});

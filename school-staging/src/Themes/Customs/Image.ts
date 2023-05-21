import {ThemeManager, ImageProps} from 'react-native-ui-lib';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const IMAGE_SIZES: Record<string, number | {width: number; height: number}> = {
  mini: 16,
  small: 24,
  medium: 36,
  big: 56,
  large: 64,
  backgroundTop: {
    width: width,
    height: (width * 1032) / 1656,
  },
};
interface IImage extends ImageProps {
  size: number;
  radius: number;
}

ThemeManager.setComponentTheme('Image', (props: IImage) => {
  let widthh = props.width || props.size;
  let height = props.height || props.size;

  for (const key in props) {
    const size = IMAGE_SIZES[key];
    if (size) {
      if (typeof size === 'object') {
        widthh = size.width;
        height = size.height;
      } else {
        widthh = height = size;
      }
    }
  }

  return {
    style: [{widthh, height, borderRadius: props?.radius}, props.style],
  };
});

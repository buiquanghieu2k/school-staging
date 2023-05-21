import React from 'react';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';
import {TouchableOpacity, Text} from 'react-native-ui-lib';
import styles from './styles';

export default function PrimaryButton({
  label,
  containerStyle,
  textStyle,
  onPress,
  textColor,
}: {
  label: string;
  onPress?: () => void;
  textColor?: string;
  backgroundColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) {
  return (
    <TouchableOpacity
      style={containerStyle ? containerStyle : styles.container}
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}>
      <Text
        primaryRegular
        style={[
          {color: textColor ? textColor : 'white'},
          styles.text,
          textStyle ? textStyle : {},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

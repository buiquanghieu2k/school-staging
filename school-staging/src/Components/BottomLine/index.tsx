import {Colors, View} from 'react-native-ui-lib';
import React from 'react';

export default function BottomLine({
  width,
  color,
}: {
  width?: number;
  color?: string;
}) {
  return (
    <View
      center
      flex
      //@ts-expect-error
      borderB={width ? width : 0.5}
      borderColor={color ? color : Colors.gray2}
      paddingV-6
    />
  );
}

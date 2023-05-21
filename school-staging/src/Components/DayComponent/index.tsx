import React from 'react';
import {TouchableOpacity} from 'react-native-ui-lib';

interface IDayComponent {
  data: any;
  onPress?: () => void;
}

export default function DayComponent({data, onPress}: IDayComponent) {
  console.log('', data);
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) onPress();
      }}></TouchableOpacity>
  );
}

import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, View, Text, Colors} from 'react-native-ui-lib';

interface ITabViewHeaderButton {
  isFocused: boolean;
  title: string;
  onPress: (focus: number) => void;
}

export default function TabViewHeaderButton({
  isFocused,
  title,
  onPress,
}: ITabViewHeaderButton) {
  return (
    <TouchableOpacity
      flexG
      onPress={onPress}
      style={isFocused ? styles.focus : styles.unFocus}>
      <View
        center
        //@ts-expect-errors
        borderColor={isFocused ? Colors.primary : Colors.gray3}
        borderB={1}>
        <Text
          marginB-6
          primaryBold
          lg
          style={{color: isFocused ? Colors.primary : Colors.gray3}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  focus: {},
  unFocus: {},
});

import {View, Text, Colors} from 'react-native-ui-lib';
import {StyleProp, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';

interface ICheckinStatus {
  isCheckedIn: boolean;
  isPrimary?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function CheckinStatus({
  isCheckedIn,
  isPrimary,
  containerStyle,
}: ICheckinStatus) {
  return isPrimary ? (
    <View
      centerV
      backgroundColor={Colors.white}
      //@ts-expect-errors
      radius={20}
      style={containerStyle ? containerStyle : styles.container}>
      <Text primaryRegular xxss green1 centerV marginH-12 marginV-8>
        {isCheckedIn ? 'Đã điểm danh' : 'Chưa điểm danh'}
      </Text>
    </View>
  ) : (
    <View style={containerStyle ? containerStyle : styles.container}>
      <Text primaryBold md primary>
        {isCheckedIn ? 'Đã điểm danh' : 'Chưa điểm danh'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 12,
  },
});

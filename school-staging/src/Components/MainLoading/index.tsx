import {View, Colors} from 'react-native-ui-lib';
import {ActivityIndicator} from 'react-native';
import React from 'react';

export default function MainLoading() {
  return (
    <View center width={'100%'}>
      <ActivityIndicator
        color={Colors.primary}
        size="large"
        style={{marginVertical: 20}}
      />
    </View>
  );
}

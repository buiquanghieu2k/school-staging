import React from 'react';
import {Colors, TouchableOpacity, View, Text} from 'react-native-ui-lib';
import {Dimensions, StyleSheet} from 'react-native';

import SvgXml, {
  HomeFocus,
  HomeUnfocus,
  AccountFocus,
  AccountUnfocus,
} from '@Components/SvgXml';
import {translate} from '@Languages/Translate';

const {width} = Dimensions.get('window');

export default function TabBar({state, navigation}: any) {
  const focus = state.index;

  const handleNavigate = (pressIndex: number) => {
    if (pressIndex !== focus) {
      navigation.navigate(state.routeNames[pressIndex], {hideBackButton: true});
    }
  };

  return (
    <View
      row
      bottom
      center
      spread
      width={width}
      backgroundColor={Colors.white1}>
      <TouchableOpacity
        paddingR-1
        flexG
        center
        paddingV-3
        borderColor={Colors.backgroundMain}
        borderR={1}
        onPress={() => handleNavigate(0)}>
        <SvgXml xml={focus == 0 ? HomeFocus : HomeUnfocus} />
        <Text
          primarySemiBold
          xs
          style={focus == 0 ? styles.focusText : styles.unfocusText}>
          {translate('home.Home')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        paddingL-1
        flexG
        center
        paddingV-3
        borderColor={Colors.backgroundMain}
        borderL={1}
        onPress={() => handleNavigate(1)}>
        <SvgXml xml={focus == 1 ? AccountFocus : AccountUnfocus} />
        <Text
          primarySemiBold
          xs
          style={focus == 1 ? styles.focusText : styles.unfocusText}>
          {translate('home.Account')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  focusText: {
    color: Colors.primary,
  },
  unfocusText: {
    color: Colors.unfocus,
  },
});

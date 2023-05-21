import {SafeAreaView, Dimensions, StyleSheet, StatusBar} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import React from 'react';

import {fontFamilies} from '@Themes/Fonts';

const {height, width} = Dimensions.get('window');

export default function MainContainer({children}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.backgroundMain}
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flex: 1,
    fontStyle: fontFamilies.primaryRegular,
    backgroundColor: Colors.backgroundMain,
  },
});

import {View, Text, TouchableOpacity, Colors} from 'react-native-ui-lib';
import React from 'react';
import {ScrollView} from 'react-native';

import SvgXml, {BackIcon} from '@Components/SvgXml';
import styles from './styles';

export default function MainLayout({
  right,
  hideBackButton,
  navigation,
  children,
  title,
  subButton,
  hideHeader,
  backgroundColor,
  paddingH,
  paddingV,
  padding,
  paddingB,
  paddingT,
  onScroll,
  isFlatList = false,
}: {
  right?: any;
  hideBackButton?: boolean;
  navigation: any;
  children: any;
  title: string;
  subButton?: any;
  hideHeader?: boolean;
  backgroundColor?: string;
  statusBarColor?: string;
  paddingH?: number;
  paddingV?: number;
  paddingB?: number;
  paddingT?: number;
  padding?: number;
  isFlatList?: boolean;
  onScroll?: (event: any) => void;
}) {
  return (
    <View
      flex
      backgroundColor={backgroundColor ? backgroundColor : Colors.primary}>
      {/* <StatusBar
        backgroundColor={
          statusBarColor ? statusBarColor : Colors.backgroundMain
        }
        barStyle="dark-content"
      /> */}
      {!hideHeader ? (
        <View centerV row spread padding-12>
          <View row centerV>
            {!hideBackButton ? (
              <TouchableOpacity
                paddingV-10
                center
                width={'10%'}
                onPress={() => {
                  navigation.pop();
                }}>
                <SvgXml xml={BackIcon} style={styles.icon} />
              </TouchableOpacity>
            ) : (
              <View height={'100%'} width={'10%'} />
            )}
            <View centerH width={'80%'}>
              <Text primaryBold white lg>
                {title}
              </Text>
            </View>
            <View centerV width={'10%'}>
              {right && right.type === 'string' && (
                <TouchableOpacity onPress={right.onPress}>
                  <Text white>{right.title}</Text>
                </TouchableOpacity>
              )}
              {right && right.type !== 'string' ? right.component : null}
            </View>
          </View>
          {/* </ImageBackground> */}
        </View>
      ) : null}
      <View
        flex
        //@ts-expect-error
        shadow
        paddingT-8
        paddingB-30
        bg-white
        style={{
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          paddingBottom: paddingB ? paddingB : 16,
          paddingTop: paddingT ? paddingT : 10,
          paddingVertical: paddingV ? paddingV : 0,
          paddingHorizontal: paddingH ? paddingH : 16,
          padding: padding ? padding : 0,
          position: 'relative',
        }}>
        {isFlatList ? (
          children
        ) : (
          <ScrollView
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}>
            {children}
          </ScrollView>
        )}
      </View>
      {subButton && subButton}
    </View>
  );
}

import {ScrollView} from 'react-native';
import {Colors, Image, View, Text} from 'react-native-ui-lib';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainContainer from '@Containers/MainContainer';
import React from 'react';
import HomeNavBar from '@Components/HomeNavBar';
import CardView from '@Components/CardView';
import {translate} from '@Languages/Translate';
import styles from './styles';
import useHome from './services';
import {nameObjectToString} from '@Utils/utils';

export default function HomeScreen(nav: NativeStackScreenProps<any>) {
  const {currentUser} = useHome(nav);

  return (
    <MainContainer>
      <View>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View
            row
            centerV
            paddingH-16
            paddingB-20
            paddingT-36
            backgroundColor={Colors.primary}>
            <View>
              <Image
                assetGroup="main"
                assetName={'defaultAvatar'}
                height={60}
                width={60}
              />
            </View>
            <View paddingL-25>
              <Text primarySemiBold white>
                {nameObjectToString(
                  currentUser.user.role === 'student'
                    ? currentUser.studentData?.name
                    : currentUser.teacherData?.name,
                )}
              </Text>
              <Text primaryRegular white>
                {currentUser.user.role === 'student'
                  ? currentUser.studentData?.phone_number
                  : currentUser.teacherData?.phone_number}
              </Text>
            </View>
          </View>
          {/**Body */}
          <CardView isGradient>
            <HomeNavBar />
          </CardView>
          <CardView title={translate('home.News')}>
            <View
              row
              //@ts-expect-errors
              radius={15}
              height={300}
              backgroundColor={Colors.gray1}
            />
          </CardView>
        </ScrollView>
      </View>
    </MainContainer>
  );
}

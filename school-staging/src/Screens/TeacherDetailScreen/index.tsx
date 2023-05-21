import {Text, Colors, Image, View} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import useTeacherDetail from './services';
import AccountDetailItem from '@Components/AccountDetailItem';
import MainLoading from '@Components/MainLoading';
import {arrayToString} from '@Utils/utils';
import TopicOfTeacher from '@Components/TopicOfTeacher';
import BottomLine from '@Components/BottomLine';

export default function TeacherDetailScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;

  const {teacherData, isLoading, listTopic} = useTeacherDetail(nav);

  return (
    <MainContainer>
      <MainLayout
        title="Chi tiết giảng viên"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        {isLoading ? (
          <MainLoading />
        ) : (
          <>
            <View centerH paddingV-8>
              <Image
                assetGroup="main"
                assetName={'defaultAvatar'}
                height={60}
                width={60}
              />
              <Text
                marginT-6
                primarySemiBold
                xl>{`${teacherData.name?.first_name} ${teacherData.name?.last_name}`}</Text>
            </View>
            {Object.entries(teacherData).map(([label, value]) => {
              if (typeof value === 'string') {
                return <AccountDetailItem label={label} value={value ?? ''} />;
              }
              if (Array.isArray(value)) {
                return (
                  <AccountDetailItem
                    label={label}
                    value={arrayToString(value)}
                  />
                );
              }
            })}
            <BottomLine />
            <View center>
              <Text primarySemiBold lg primary>
                Danh sách đề tài:
              </Text>
            </View>
            {listTopic &&
              listTopic.map(item => {
                return <TopicOfTeacher data={item} key={item.id} />;
              })}
          </>
        )}
      </MainLayout>
    </MainContainer>
  );
}

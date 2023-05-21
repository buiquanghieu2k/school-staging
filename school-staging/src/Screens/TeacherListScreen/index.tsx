import {Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import useTeacherList from './services';
import TeacherItem from '@Components/TeacherItem';
import MainLoading from '@Components/MainLoading';

export default function TeacherListScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {teacherList, isLoading} = useTeacherList();
  return (
    <MainContainer>
      <MainLayout
        title="Danh sách giảng viên"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        {isLoading ? (
          <MainLoading />
        ) : (
          teacherList.map(item => {
            return <TeacherItem data={item} key={item.id} />;
          })
        )}
      </MainLayout>
    </MainContainer>
  );
}

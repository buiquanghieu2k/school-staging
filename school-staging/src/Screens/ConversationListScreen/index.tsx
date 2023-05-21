import {Colors} from 'react-native-ui-lib';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import {IRootState} from '@Store/configureStore';
import {ITeacher} from '@Types/ITeacher';
import {IStudent} from '@Types/IStudent';
import TeacherApi from '@Api/TeacherApi';
import StudentApi from '@Api/StudentApi';
import ConversationItem from '@Components/ConversationItem';
import MainLoading from '@Components/MainLoading';
import {nameObjectToString} from '@Utils/utils';

export default function ConversationListScreen(nav: StackScreenProps<any>) {
  const {navigation} = nav;
  const currentUser = useSelector((state: IRootState) => state.user);

  const [teacherList, setTeacherList] = useState<ITeacher[]>([]);
  const [studentList, setStudentList] = useState<IStudent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      const teachers = await TeacherApi.getTeachers();
      const students = await StudentApi.getAll();

      setTeacherList(teachers);
      setStudentList(students);

      if (!currentUser.user.id) {
        return;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainContainer>
      <MainLayout
        title="Hộp thư"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        {isLoading && <MainLoading />}
        {currentUser.studentData &&
          teacherList.map((item: any, index: number) => {
            return (
              <ConversationItem
                teacherList={teacherList}
                studentList={studentList}
                key={index}
                username={nameObjectToString(item.name)}
                userId={item.user_id}
              />
            );
          })}
        {currentUser.teacherData &&
          studentList.map((item: any, index: number) => {
            return (
              <ConversationItem
                teacherList={teacherList}
                studentList={studentList}
                key={index}
                username={nameObjectToString(item.name)}
                userId={item.user_id}
              />
            );
          })}
      </MainLayout>
    </MainContainer>
  );
}

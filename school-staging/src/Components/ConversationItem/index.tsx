import {Text, Image, TouchableOpacity, View} from 'react-native-ui-lib';
import React from 'react';
import {useSelector} from 'react-redux';
import {StackActions, useNavigation} from '@react-navigation/native';

import {IRootState} from '@Store/configureStore';
import ScreenNames from '@Constants/ScreenNames';
import {ITeacher} from '@Types/ITeacher';
import {IStudent} from '@Types/IStudent';

export default function ConversationItem({
  username,
  userId,
  studentList,
  teacherList,
}: {
  studentList: IStudent[];
  teacherList: ITeacher[];
  username?: string;
  userId?: string;
}) {
  const currentUserId = useSelector((state: IRootState) => state.user.user.id);
  const navigation = useNavigation();

  const navigateToConversation = () => {
    navigation.dispatch(
      StackActions.push(ScreenNames.ConversationDetail, {
        users: [userId, currentUserId],
        teacherList,
        studentList,
        username,
      }),
    );
  };

  return (
    <TouchableOpacity row centerV paddingV-8 onPress={navigateToConversation}>
      <Image
        assetGroup="main"
        assetName={'defaultAvatar'}
        height={60}
        width={60}
      />
      <View paddingL-6>
        <Text primaryRegular lg>
          {username}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

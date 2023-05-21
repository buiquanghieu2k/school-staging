import {Text, TouchableOpacity} from 'react-native-ui-lib';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {ITopic} from '@Types/ITopic';
import ScreenNames from '@Constants/ScreenNames';

export default function TopicOfTeacher({data}: {data: ITopic}) {
  const navigation = useNavigation();

  const handleNavigate = () => {
    //@ts-expect-error
    navigation.push(ScreenNames.TopicDetail, {data: data});
  };
  return (
    <TouchableOpacity
      flex
      paddingV-8
      paddingH-4
      onPress={handleNavigate}
      center>
      <Text primaryRegular lg>
        {data.topic_name}
      </Text>
    </TouchableOpacity>
  );
}

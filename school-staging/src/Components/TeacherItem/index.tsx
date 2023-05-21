import {View, Text, Colors, TouchableOpacity, Image} from 'react-native-ui-lib';
import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';

import {ITeacher} from '@Types/ITeacher';
import {translate} from '@Languages/Translate';
import ScreenNames from '@Constants/ScreenNames';

export default function TeacherItem({data}: {data: ITeacher}) {
  const navigation = useNavigation();

  const navigateToTeacherDetail = () => {
    navigation.dispatch(
      StackActions.push(ScreenNames.TeacherDetail, {data: data}),
    );
  };

  return (
    <TouchableOpacity
      row
      flex
      centerV
      paddingV-8
      marginB-8
      radius={10}
      onPress={navigateToTeacherDetail}
      borderB={0.7}
      bbColor={Colors.gray3}>
      <View centerV width={'25%'}>
        <Image
          assetGroup="main"
          assetName={'defaultAvatar'}
          height={60}
          width={60}
        />
      </View>
      <View width={'75%'}>
        <Text
          primarySemiBold
          lg
          black>{`${data.name?.first_name} ${data.name?.last_name}`}</Text>
        <Text primaryRegular md black>
          {`${translate('business.teacher_code')}: ${data.teacher_code}`}
        </Text>
        <Text primaryRegular md black>
          {`${translate('business.phone_number')}: ${data.phone_number}`}
        </Text>
        <Text primaryRegular md black>
          {`${translate('business.Email')}: ${data.email}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

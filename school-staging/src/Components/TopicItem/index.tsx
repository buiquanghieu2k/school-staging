import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import React from 'react';
import moment from 'moment';
import {StackActions, useNavigation} from '@react-navigation/native';

import {ITopic} from '@Types/ITopic';
import shadowBox from '@Utils/shadowBox';
import styles from './styles';
import ScreenNames from '@Constants/ScreenNames';
import {nameObjectToString} from '@Utils/utils';

export default function TopicItem({data}: {data: ITopic}) {
  const navigation = useNavigation();

  const navigateToTopicDetail = () => {
    navigation.dispatch(
      StackActions.push(ScreenNames.TopicDetail, {data: data}),
    );
  };

  return (
    <TouchableOpacity
      style={[shadowBox.boxShadow, styles.container]}
      centerV
      marginB-8
      padding-8
      backgroundColor="white"
      onPress={navigateToTopicDetail}>
      <View row>
        <Text primarySemiBold lg>
          {data.topic_name}
        </Text>
      </View>
      <View>
        {data.creator && (
          <Text gray2 primaryLight md marginT-6>
            {`Người tạo: ${nameObjectToString(data.creator.name)}`}
          </Text>
        )}
        <Text gray2 primaryLight md>
          {`Thời gian tạo: ${moment(data.createdAt).format(
            'hh:mm:ss -  DD/MM/YYYY',
          )}`}
        </Text>
        <Text black1 primaryRegular md numberOfLines={4} marginT-6>
          {data.detail}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

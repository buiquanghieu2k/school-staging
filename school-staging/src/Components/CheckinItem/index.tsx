import {View, Text, Colors, TouchableOpacity} from 'react-native-ui-lib';
import React from 'react';
import moment from 'moment';

import {ICheckinItem} from '@Types/ICheckinItem';
import {StyleSheet} from 'react-native';
import CheckinStatus from './CheckinStatus';

export default function CheckinItem({
  data,
  isInHistory,
}: {
  data: ICheckinItem;
  isInHistory?: boolean;
}) {
  const {
    roomId,
    subjectId,
    subjectName,
    classId,
    teacher,
    startTime,
    endTime,
    isCheckedIn,
    periodNumber,
  } = data;

  const onPress = () => {
    console.log('checkin');
  };

  return !isInHistory ? (
    <TouchableOpacity
      onPress={onPress}
      row
      flex
      paddingH-16
      paddingV-8
      marginB-2
      backgroundColor={Colors.primary}
      radius={8}>
      <View center>
        <Text primarySemiBold white md>
          {`Tiết ${periodNumber}`}
        </Text>
        <Text
          primaryLight
          white
          xs
          marginV-8>{`${startTime} - ${endTime}`}</Text>
        <CheckinStatus isCheckedIn={isCheckedIn} isPrimary />
      </View>
      <View style={styles.dashedLine} />
      <View>
        <Text white primaryBold lg>{`Phòng: ${roomId}`}</Text>
        <Text white primaryRegular md>{`Mã môn học: ${subjectId}`}</Text>
        <Text white primaryRegular md>{`Lớp: ${classId}`}</Text>
        <Text white primaryRegular md>{`Giáo viên: ${teacher}`}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      row
      backgroundColor={Colors.white1}
      paddingV-8
      paddingH-16>
      <View flexG>
        <Text primarySemiBold black1 md>{`${subjectId}${
          subjectName ? ` - ${subjectName}` : ''
        }`}</Text>
        <Text primaryRegular gray4 sm>{`Phòng học ${roomId} - ${moment().format(
          'DD/MM/YYYY',
        )}`}</Text>
      </View>
      <CheckinStatus
        isCheckedIn={isCheckedIn}
        containerStyle={styles.checkinStatus}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dashedLine: {
    marginLeft: 18,
    marginRight: 26,
    borderRightWidth: 1,
    borderColor: Colors.white,
    borderStyle: 'dashed',
  },
  checkinStatus: {},
});

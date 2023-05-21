import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import React from 'react';
import moment from 'moment';

import {IDialog} from '@Types/IDialog';
import {StyleSheet} from 'react-native';

export default function DialogItem({
  isOwn = true,
  dialog,
}: {
  username?: string;
  isOwn?: boolean;
  dialog: IDialog;
}) {
  if (isOwn) {
    return (
      <TouchableOpacity centerV paddingV-8 right marginV-2>
        <View
          style={styles.radius}
          //@ts-expect-error
          maxWidth="80%"
          right
          padding-6
          bg-primary>
          <Text primaryRegular lg white>
            {dialog.text}
          </Text>
          <Text primaryThin sm white>
            {moment(dialog.createdAt).format('HH:mm:ss - DD/MM/YYYY')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity centerV paddingV-8 left marginV-2>
      <View
        style={styles.radius}
        //@ts-expect-error
        maxWidth="80%"
        left
        padding-6
        bg-gray1>
        <Text primaryRegular lg black>
          {dialog.text}
        </Text>
        <Text primaryThin sm gray2>
          {moment(dialog.createdAt).format('HH:mm:ss - DD/MM/YYYY')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  radius: {
    borderRadius: 10,
  },
});

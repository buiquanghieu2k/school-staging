import {Text, TouchableOpacity} from 'react-native-ui-lib';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function TagItem({
  title,
  screenName,
  id,
  data,
}: {
  title: string;
  screenName?: string;
  id?: string;
  data?: any;
}) {
  const navigation = useNavigation();
  const navigateToScreen = () => {
    //@ts-expect-error
    navigation.push(screenName, {
      data,
      id,
    });
  };

  return (
    <TouchableOpacity paddingH-4 bottom onPress={navigateToScreen}>
      <Text primaryRegular md>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

import {Colors, Text, View} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import styles from './styles';
import useRegisterTopic from './services';
import PrimaryButton from '@Components/PrimaryButton';
import Dropdown from '@Components/Dropdown';

export default function RegisterTopicScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {
    handleRegister,
    listTopicValueProps,
    setSelectedTopic,
    selectedTopic,
    detail,
  } = useRegisterTopic(nav);

  return (
    <MainContainer>
      <MainLayout
        title="Đăng ký đề tài"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <Text primarySemiBold md marginB-4 marginL-6>
          Đề tài
        </Text>
        <Dropdown
          marginT={46}
          placeholder="Chọn đề tài"
          data={listTopicValueProps}
          onSelect={item => {
            setSelectedTopic(item);
          }}
          selectedValue={selectedTopic}
        />
        {selectedTopic && (
          <>
            <View
              //@ts-expect-error
              border={0.5}
              radius={10}
              padding-4
              borderColor={Colors.gray3}>
              <Text primarySemiBold md marginB-4 marginL-6>
                {detail}
              </Text>
            </View>
          </>
        )}

        <PrimaryButton
          textStyle={styles.updateText}
          label="Xác nhận đăng ký"
          onPress={handleRegister}
          containerStyle={styles.updateButton}
        />
      </MainLayout>
    </MainContainer>
  );
}

import {Colors, Text} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainLayout from '@Containers/MainLayout';
import MainContainer from '@Containers/MainContainer';
import InputField from '@Components/InputField';
import styles from './styles';
import DatePicker from '@Components/DatePicker';
import useUpdateAccount from './services';
import PrimaryButton from '@Components/PrimaryButton';
import Dropdown from '@Components/Dropdown';

export default function UpdateAccountScreen(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const {
    date_of_birth,
    setdate_of_birth,
    setfirst_name,
    setlast_name,
    setAddress,
    handleUpdate,
    genders,
    gender,
    setGender,
  } = useUpdateAccount(nav);

  return (
    <MainContainer>
      <MainLayout
        title="Cập nhật thông tin"
        navigation={navigation}
        statusBarColor={Colors.secondary}>
        <InputField
          label="Họ"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
          onChangeText={text => {
            setlast_name(text);
          }}
        />
        <InputField
          label="Tên"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
          onChangeText={text => {
            setfirst_name(text);
          }}
        />
        <Text primarySemiBold black marginL-8 marginB-6>
          Giới tính
        </Text>
        <Dropdown
          marginT={46}
          placeholder="Chọn giới tính"
          data={genders}
          onSelect={item => {
            setGender(item);
          }}
          selectedValue={gender}
        />
        <DatePicker
          label="Ngày sinh"
          mode="date"
          onChangeValue={date => setdate_of_birth(date)}
          value={date_of_birth}
          showLabel
        />

        <InputField
          label="Địa chỉ"
          containerStyle={styles.nameInput}
          showLabel
          disabledBoxShadow
          onChangeText={text => {
            setAddress(text);
          }}
        />
        <PrimaryButton
          textStyle={styles.updateText}
          label="Cập nhật thông tin"
          onPress={handleUpdate}
          containerStyle={styles.updateButton}
        />
      </MainLayout>
    </MainContainer>
  );
}

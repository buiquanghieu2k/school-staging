import {View, Image, Text, Colors} from 'react-native-ui-lib';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MainContainer from '@Containers/MainContainer';
import MainLayout from '@Containers/MainLayout';
import {translate} from '@Languages/Translate';
import useAccount from './services';
import MainLoading from '@Components/MainLoading';
import PrimaryButton from '@Components/PrimaryButton';
import styles from './styles';
import SubButton from '@Components/SubButton';
import AccountDetailItem from '@Components/AccountDetailItem';

export default function AccountScreen(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const {isLoading, onPressLogout, onPressUpdate, currentUser, values} =
    useAccount(nav);

  return (
    <MainContainer>
      <MainLayout
        subButton={<SubButton type="update" onPress={onPressLogout} />}
        hideBackButton={route?.params?.hideBackButton}
        title={translate('home.Account')}
        navigation={navigation}>
        {!isLoading ? (
          <View>
            <View centerH paddingV-10>
              <Image
                assetGroup="main"
                assetName="defaultAvatar"
                height={60}
                width={60}
                marginB-20
              />
              {currentUser && currentUser.studentData?.selected_topic_id ? (
                <View
                  backgroundColor={Colors.green1}
                  paddingH-16
                  paddingV-4
                  center
                  //@ts-expect-error
                  radius={60}>
                  <Text primarySemiBold md white>
                    Đã đăng ký đề tài
                  </Text>
                </View>
              ) : currentUser.user.role === 'student' ? (
                <View
                  backgroundColor={Colors.red1}
                  paddingH-16
                  paddingV-4
                  center
                  //@ts-expect-error
                  radius={60}>
                  <Text primarySemiBold md white>
                    Chưa đăng ký đề tài
                  </Text>
                </View>
              ) : null}
            </View>
            <View>
              {Object.entries(values).length !== 0 &&
                Object.entries(values).map(([key, value]) => {
                  return <AccountDetailItem label={key} value={value} />;
                })}
            </View>
            <PrimaryButton
              containerStyle={styles.updateButton}
              textStyle={styles.updateText}
              label={translate('main.UpdateInformation')}
              onPress={onPressUpdate}
            />
          </View>
        ) : (
          <MainLoading />
        )}
      </MainLayout>
    </MainContainer>
  );
}

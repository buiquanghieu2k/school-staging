import {Keyboard} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import SvgXml, {LogoIcon} from '@Components/SvgXml';
import MainContainer from '@Containers/MainContainer';
import InputField from '@Components/InputField';
import PrimaryButton from '@Components/PrimaryButton';
import useLogin from './services';
import styles from './styles';
import {translate} from '@Languages/Translate';

export default function LoginScreen(nav: NativeStackScreenProps<any>) {
  const {setUsername, setPassword, handleLogin} = useLogin(nav);

  return (
    <MainContainer>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View height="35%" center>
          <SvgXml xml={LogoIcon} />
          <Text primarySemiBold primary marginT-sm xxl>
            School
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View height="65%">
          <InputField
            label={translate('main.Username')}
            borderRadius={15}
            onChangeText={(text: string) => setUsername(text)}
          />
          <InputField
            isPassword
            label="Mật khẩu"
            borderRadius={15}
            onChangeText={(text: string) => setPassword(text)}
          />
          {/* <PrimaryButton
            label="Quên mật khẩu?"
            onPress={handleForget}
            containerStyle={styles.forgetButton}
            textStyle={styles.forGetButtonText}
          /> */}
          <PrimaryButton
            label="Đăng nhập"
            onPress={handleLogin}
            containerStyle={styles.loginButton}
            textStyle={styles.loginButtonText}
          />
          {/* <View row center padding-xss marginT-40>
            <Text black1 primarySemiBold>
              {'Nếu chưa có tài khoản, vui lòng '}
            </Text>
            <PrimaryButton
              label="đăng ký"
              onPress={handleRegister}
              containerStyle={styles.registerButton}
              textStyle={styles.registerButtonText}
            />
          </View> */}
          {/* <PrimaryButton
            label="Đăng nhập với tư cách tài khoản khách"
            onPress={handleGuest}
            containerStyle={styles.guestButton}
            textStyle={styles.guestButtonText}
          /> */}
          <View row center padding-xs marginT-60>
            {/* <Text black1 primaryRegular>
              {'Hotline hỗ trợ '}
            </Text>
            <PrimaryButton
              label="1900 6888"
              onPress={handleHotline}
              containerStyle={styles.hotlineButton}
              textStyle={styles.hotlineButtonText}
            /> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
}

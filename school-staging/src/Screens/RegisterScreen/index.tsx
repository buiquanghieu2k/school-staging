import Header from '@Components/Header';
import PrimaryButton from '@Components/PrimaryButton';
import TextInputSecond from '@Components/TextInputSecond';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, ScrollView, TextInput, View} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import useRegister from './services';
import styles from './styles';

export default function RegisterScreen(nav: NativeStackScreenProps<any>) {
  //   const {navigation} = nav;
  const {
    RegisterHandle,
    CancelHandle,
    SendOTP,
    name,
    setName,
    userName,
    setUserName,
    pass,
    setPass,
    phone,
    setPhone,
    otp,
    setOTP,
    email,
    setEmail,
  } = useRegister(nav);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Đăng ký" iconLeft={true} handleLeft={CancelHandle} />
      {/* <InputField label="oke"/> */}
      <ScrollView
        style={[styles.container, {marginHorizontal: 16, paddingTop: 20}]}>
        <TextInputSecond
          value={name}
          onChangeText={(text: string) => setName(text)}
          label="Họ và tên"
          placeholder="Nhập họ và tên"
        />
        <TextInputSecond
          value={userName}
          onChangeText={(text: string) => setUserName(text)}
          label="Tên đăng nhập"
          placeholder="Nhập tên đăng nhập"
        />
        <TextInputSecond
          value={pass}
          onChangeText={(text: string) => setPass(text)}
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
        />
        <TextInputSecond
          value={phone}
          onChangeText={(text: string) => setPhone(text)}
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
        />

        {/* </View> */}
        <TextInputSecond
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          label="Email"
          placeholder="Nhập email"
        />
        <View style={styles.rowView}>
          <PrimaryButton
            onPress={CancelHandle}
            label="Huỷ bỏ"
            containerStyle={styles.buttonAccept}
            textStyle={styles.textButton}
          />
          <PrimaryButton
            onPress={RegisterHandle}
            label="Đăng ký"
            containerStyle={styles.buttonAccept}
            textStyle={styles.textButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

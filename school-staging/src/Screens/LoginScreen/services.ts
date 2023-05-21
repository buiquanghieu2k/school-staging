import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {} from 'react-native-ui-lib';

import ScreenNames from '@Constants/ScreenNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {setLoading} from '@Store/Reducers/loadingSlice';
import {login} from '@Api/AuthApi';
import {ShowMessage} from '@Utils/flashMessage';
import {setUser} from '@Store/Reducers/userSlice';

export default function useLogin(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const data: any = await login({username, password});

      console.log(data);

      dispatch(
        setUser({
          user: {
            id: data.user.id,
            username: data.user.username,
            password: password,
            role: data.user.role,
          },
          token: data.token,
          studentData: data?.studentData,
          teacherData: data?.teacherData,
        }),
      );
      dispatch(setLoading(false));
      navigation.replace(ScreenNames.MainTab);
    } catch (error) {
      dispatch(setLoading(false));
      ShowMessage({message: 'Username or password is incorrect'});
      console.error(error);
    }
  };

  const handleForget = () => {
    console.log('forget');
  };

  const handleRegister = () => {
    nav.navigation.replace(ScreenNames.Register, {
      testParams: true,
    });
    console.log('register');
  };

  const handleGuest = () => {
    console.log('guest');
  };

  const handleHotline = () => {
    console.log('Hotline');
  };

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    handleForget,
    handleRegister,
    handleGuest,
    handleHotline,
  };
}

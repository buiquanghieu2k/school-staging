import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {Alert, AlertButton} from 'react-native';

import ScreenNames from '@Constants/ScreenNames';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '@Store/Reducers/loadingSlice';
import {IRootState} from '@Store/configureStore';
import {arrayToString, nameObjectToString} from '@Utils/utils';

export default function useAccount(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const dispatch = useDispatch();
  const currentUser = useSelector((state: IRootState) => state.user);
  const [values, setValues] = useState<Record<string, string>>({});

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const logoutButtons: AlertButton[] = [
    {
      text: 'Hủy',
    },
    {
      text: 'Đăng xuất',
      onPress: () => {
        dispatch(setLoading(true));
        setTimeout(() => {
          navigation.replace(ScreenNames.Login, {
            testParams: true,
          });
          dispatch(setLoading(false));
        }, 500);
      },
    },
  ];

  const onPressLogout = () => {
    Alert.alert(
      'Đăng xuất',
      'Bạn chắc chắn muốn đăng xuất?',
      logoutButtons,
      {},
    );
  };

  const onPressUpdate = () => {
    navigation.push(ScreenNames.UpdateAccount);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      if (currentUser.studentData) {
        const tempValues: Record<string, string> = {};
        Object.entries(currentUser.studentData).forEach(([label, value]) => {
          if (typeof value === 'object') {
            tempValues[label] = nameObjectToString(value);
          } else if (typeof value === 'string') {
            tempValues[label] = value;
          } else if (typeof value === 'number') {
            tempValues[label] = value.toString();
          } else if (
            label === '__v' ||
            label === 'updatedAt' ||
            label === 'createdAt'
          ) {
            return;
          } else {
            tempValues[label] = arrayToString(value);
          }
        });

        setValues(tempValues);
      }
      if (currentUser.teacherData) {
        console.log('----------------');
        const tempValues: Record<string, string> = {};
        Object.entries(currentUser.teacherData).forEach(([label, value]) => {
          console.log('item', label, value);
          if (typeof value === 'object') {
            tempValues[label] = nameObjectToString(value);
          } else if (typeof value === 'string') {
            tempValues[label] = value;
          }
        });

        setValues(tempValues);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation, currentUser.studentData, currentUser.teacherData]);

  return {
    isLoading,
    setIsLoading,
    onPressLogout,
    onPressUpdate,
    currentUser,
    values,
  };
}

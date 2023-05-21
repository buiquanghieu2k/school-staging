import {IRootState} from '@Store/configureStore';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

export default function useHome(nav: NativeStackScreenProps<any>) {
  const currentUser = useSelector((state: IRootState) => state.user);

  return {
    currentUser,
  };
}

import {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import {ShowMessage} from '@Utils/flashMessage';
import {IValueLabel} from '@Types/IValueLabel';
import {IRootState} from '@Store/configureStore';
import {updateStudentById} from '@Api/StudentApi';
import {IStudent} from '@Types/IStudent';
import {updateStudent, updateTeacher} from '@Store/Reducers/userSlice';
import {ITeacher} from '@Types/ITeacher';
import {updateTeacherById} from '@Api/TeacherApi';

export default function useUpdateAccount(nav: NativeStackScreenProps<any>) {
  const currentUser = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();

  const {navigation} = nav;
  const [first_name, setfirst_name] = useState<string>('');
  const [last_name, setlast_name] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [date_of_birth, setdate_of_birth] = useState<Date>(new Date());
  const [gender, setGender] = useState<IValueLabel>();

  const genders: IValueLabel[] = [
    {label: 'Nam', value: 'male'},
    {label: 'Nữ', value: 'female'},
    {label: 'Khác', value: 'other'},
  ];

  const handleUpdate = async () => {
    try {
      if (!first_name || !last_name || !address || !date_of_birth || !gender) {
        ShowMessage({
          message: 'Vui lòng điền đẩy đủ thông tin.',
          type: 'danger',
        });
        return;
      }

      if (!currentUser.studentData && !currentUser.teacherData) {
        ShowMessage({
          message: 'Tài khoản này không phải là sinh viên.',
          type: 'danger',
        });
        return;
      }

      if (currentUser.studentData?.id) {
        const updateData: IStudent = {
          name: {
            first_name,
            last_name,
          },
          date_of_birth: date_of_birth.toISOString(),
          address,
          gender: gender.value,
        };
        const res = await updateStudentById({
          id: currentUser.studentData.id,
          data: updateData,
        });

        if (res) {
          dispatch(updateStudent(updateData));

          navigation.pop();
          ShowMessage({
            message: 'Cập nhật thông tin thành công.',
            type: 'success',
          });
        }
      }

      if (currentUser.teacherData?.id) {
        const updateData: ITeacher = {
          name: {
            first_name,
            last_name,
          },
          date_of_birth: date_of_birth.toISOString(),
          address,
          gender: gender.value,
        };
        const res = await updateTeacherById({
          id: currentUser.teacherData.id,
          data: updateData,
        });

        if (res) {
          dispatch(updateTeacher(updateData));

          navigation.pop();
          ShowMessage({
            message: 'Cập nhật thông tin thành công.',
            type: 'success',
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    date_of_birth,
    setdate_of_birth,
    first_name,
    setfirst_name,
    last_name,
    setlast_name,
    address,
    setAddress,
    handleUpdate,
    genders,
    gender,
    setGender,
  };
}

import {useEffect, useState} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ShowMessage} from '@Utils/flashMessage';
import {IValueProps} from '@Types/IValueProps';
import {ITopic} from '@Types/ITopic';
import {getTopics} from '@Api/TopicApi';
import {studentSelectTopic} from '@Api/StudentApi';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@Store/configureStore';
import {updateStudent} from '@Store/Reducers/userSlice';

export default function useRegisterTopic(nav: NativeStackScreenProps<any>) {
  const {navigation} = nav;
  const dispatch = useDispatch();
  const currentUser = useSelector((state: IRootState) => state.user);

  const [listTopic, setListTopic] = useState<ITopic[]>([]);
  const [listTopicValueProps, setListTopicValueProps] = useState<IValueProps[]>(
    [],
  );
  const [selectedTopic, setSelectedTopic] = useState<IValueProps>();
  const [detail, setDetail] = useState<string>('');

  const handleRegister = async () => {
    try {
      if (!selectedTopic) {
        ShowMessage({message: 'Vui lòng chọn đề tài', type: 'danger'});
        return;
      }
      const res = await studentSelectTopic(
        currentUser.studentData?.id,
        selectedTopic.value,
      );

      if (res) {
        navigation.pop();
        ShowMessage({message: 'Đăng ký đề tài thành công.', type: 'success'});
        dispatch(updateStudent({selected_topic_id: selectedTopic.value}));
      } else {
        ShowMessage({message: 'Có lỗi khi đăng ký đề tài.', type: 'success'});
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const result = await getTopics({});
      const res: ITopic[] = result.topics;

      const tempList: IValueProps[] = res.map(item => {
        return {
          value: item.id,
          label: item.topic_name,
        };
      });

      setListTopicValueProps(tempList);

      if (res) {
        setListTopic(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setValueForDetail = () => {
    if (!selectedTopic) {
      return;
    }
    const tempSelectedTopic = listTopic.find(item => {
      return item.id === selectedTopic.value;
    });
    setDetail(tempSelectedTopic?.detail ?? '');
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setValueForDetail();
  }, [selectedTopic]);

  return {
    handleRegister,
    detail,
    setDetail,
    selectedTopic,
    setSelectedTopic,
    listTopic,
    listTopicValueProps,
    setListTopicValueProps,
  };
}

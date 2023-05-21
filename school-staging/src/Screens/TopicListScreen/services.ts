import {useEffect, useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LayoutAnimation, TextInput} from 'react-native';

import {ITopic} from '@Types/ITopic';
import ScreenNames from '@Constants/ScreenNames';
import {getTopics} from '@Api/TopicApi';
import {useSelector} from 'react-redux';
import {IRootState} from '@Store/configureStore';
import {ITeacher} from '@Types/ITeacher';

export default function useTopicList(nav: NativeStackScreenProps<any>) {
  const {navigation, route} = nav;
  const currentUser = useSelector((state: IRootState) => state.user);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teacherList, setTeacherList] = useState<ITeacher[]>([]);
  const [topicList, setTopicList] = useState<ITopic[]>([]);
  const [showButtonTitle, setShowButtonTitle] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');
  const textInputRef = useRef<TextInput>(null);

  const handleRegister = () => {
    navigation.push(ScreenNames.RegisterTopic, {data: route.params?.data});
  };

  const handleScroll = (event: any) => {
    const layout = {
      duration: 100,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
    };
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > 0 ? 'down' : 'up';
    const isActionButtonVisible = direction === 'up';
    if (isActionButtonVisible !== showButtonTitle) {
      LayoutAnimation.configureNext(layout);
      setShowButtonTitle(isActionButtonVisible);
    }
  };

  const handleSearch = () => {
    getTopicList();
  };

  const getTopicList = async () => {
    setIsLoading(true);
    try {
      const res = await getTopics({search: searchText || ''});
      setTopicList(res.topics);
      setTeacherList(res.teachers);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const sub = navigation.addListener('focus', () => {
      getTopicList();
    });

    return sub;
  }, [navigation]);

  return {
    isLoading,
    setIsLoading,
    topicList,
    showButtonTitle,
    setShowButtonTitle,
    handleScroll,
    handleRegister,
    currentUser,
    searchText,
    setSearchText,
    textInputRef,
    handleSearch,
    teacherList,
  };
}

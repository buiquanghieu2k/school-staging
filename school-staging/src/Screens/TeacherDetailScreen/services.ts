import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';

import {ITeacher} from '@Types/ITeacher';
import {getAll} from '@Api/CategoryApi';
import {ITopic} from '@Types/ITopic';
import {getTopics} from '@Api/TopicApi';

export default function useTeacherDetail(nav: NativeStackScreenProps<any>) {
  const prevData: ITeacher = nav.route.params?.data;

  const [teacherData, setTeacherData] = useState<ITeacher>(prevData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [listTopic, setListTopic] = useState<ITopic[]>([]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await getAll();
      const _categories: Record<string, string> = {};
      res.forEach((item: any) => {
        _categories[item.id] = item.category_name;
      });
      setCategories(_categories);

      const tempTopic = await getTopics({ids: prevData.main_courses});
      console.log('temp', tempTopic);

      setListTopic(tempTopic.topics);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    teacherData,
    isLoading,
    setTeacherData,
    categories,
    listTopic,
  };
}

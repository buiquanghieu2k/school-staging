import {useEffect, useState} from 'react';

import {ITeacher} from '@Types/ITeacher';
import {getTeachers} from '@Api/TeacherApi';

export default function useTeacherList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teacherList, setTeacherList] = useState<ITeacher[]>([]);

  const getTeacherList = async () => {
    setIsLoading(true);
    try {
      const res = await getTeachers();
      console.log(res);
      setTeacherList(res);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTeacherList();
  }, []);

  return {
    isLoading,
    setIsLoading,
    teacherList,
  };
}

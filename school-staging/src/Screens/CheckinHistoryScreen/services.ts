import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useRef, useState} from 'react';

import {ICheckinItem} from '@Types/ICheckinItem';

const mock: ICheckinItem[] = [
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
    subjectName: 'Cơ sở dữ liệu',
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
  {
    roomId: 'GD-3',
    subjectId: 'INT2211',
    classId: 'INT2211 22',
    teacher: 'Nguyen Thuy Hanh',
    startTime: '09:00',
    endTime: '11:50',
    isCheckedIn: true,
    periodNumber: 3,
  },
];

export default function useCheckinHistory(nav: NativeStackScreenProps<any>) {
  const carouselRef = useRef<any>(null);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [checkinList, setCheckinList] = useState<ICheckinItem[]>(mock);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    carouselRef.current?.goToPage(currentTab, true);
  }, [currentTab]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 20);
    return () => clearTimeout(timeout);
  }, []);

  return {
    currentTab,
    setCurrentTab,
    carouselRef,
    checkinList,
    setCheckinList,
    isLoading,
    setIsLoading,
  };
}

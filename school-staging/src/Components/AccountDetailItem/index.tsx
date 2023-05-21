import {View, Text} from 'react-native-ui-lib';
import React from 'react';

import moment from 'moment';

export default function AccountDetailItem({
  label,
  value,
  multiLines = false,
}: {
  label: string;
  value: string;
  multiLines?: boolean;
}) {
  console.log(label, value);
  const labels: Record<string, string> = {
    name: 'Họ và tên',
    date_of_birth: 'Ngày sinh',
    gender: 'Giới tính',
    address: 'Đia chỉ',
    email: 'Email',
    phone_number: 'Số điện thoại',
    teacher_code: 'Mã giảng viên',
    student_code: 'Mã sinh viên',
    specialization: 'Chuyên ngành',
    academic_year: 'Niên khoá',
    // selected_topic_id: 'Đề tài đã chọn',
    main_course: 'Môn học giảng dạy',
  };

  if (!labels[label] || value === '') {
    return null;
  }

  return (
    <View flex spread row paddingV-10>
      <Text primaryBold primary md>
        {`${labels[label]}:`}
      </Text>
      {multiLines ? (
        //@ts-expect-error
        <View maxWidth={'65%'}>
          <Text primaryRegular md multiLines>
            {label === 'date_of_birth'
              ? moment(value).format('DD-MM-YYYY')
              : value}
          </Text>
        </View>
      ) : (
        <Text primaryRegular md>
          {label === 'date_of_birth'
            ? moment(value).format('DD-MM-YYYY')
            : value}
        </Text>
      )}
    </View>
  );
}

import {
  View,
  Text,
  TouchableOpacity,
  // Dialog,
  // Image,
  Colors,
} from 'react-native-ui-lib';
import DatePicker from 'react-native-date-picker';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {StyleProp, ViewStyle} from 'react-native';

// import SvgXml from '@Components/SvgXml/SvgXml';
// import {ShowMessage} from '@Shared/Message';
// import images from '@Shared/images';

export default function DateTimePicker({
  value,
  mode,
  disabled = false,
  label,
  // iconStyle,
  onChangeValue,
  containerStyle,
  date,
  minDate,
  maxDate,
  showLabel = false,
  ...rest
}: {
  mode: 'date' | 'time';
  onChangeValue: (date: Date) => void;
  value: Date;
  label?: string;
  date?: Date;
  disabled?: boolean;
  iconStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  minDate?: Date;
  maxDate?: Date;
  rest?: any;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
  showLabel?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [_dateValue, _setDateValue] = useState<Date | null>(null);

  const handleOpenDialog = () => {
    if (disabled) {
      return;
    } else {
      setOpen(true);
    }
  };

  const renderValue = (v: string | null) => {
    return (
      <>
        {v ? (
          <Text paddingV-8 primaryRegular md>
            {v}
          </Text>
        ) : (
          <Text paddingV-8 ldRegular gray8>
            {mode === 'date' ? 'Chọn ngày' : 'Chọn thời gian'}
          </Text>
        )}
        {/* <SvgXml xml={mode == 'date' ? images.CalendarIcon : images.TimeIcon} /> */}
      </>
    );
  };

  // const renderIcon = () => {
  //   return (
  //     <View style={iconStyle ?? iconStyle}>
  //       {/* <SvgXml xml={images.CalendarIcon} /> */}
  //     </View>
  //   );
  // };

  // const renderTime = () => {
  //   return <View></View>;
  // };

  // const renderDate = () => {
  //   return <View></View>;
  // };

  useEffect(() => {
    _setDateValue(value);
  }, [value]);

  return (
    <>
      {showLabel && (
        <Text primarySemiBold black marginL-8>
          {label}
        </Text>
      )}
      <View style={containerStyle || {paddingVertical: 8}}>
        <View
          //@ts-expect-errors
          border={0.5}
          paddingV-8
          paddingH-16
          radius={10}
          borderColor={Colors.gray3}
          backgroundColor={disabled ? Colors.mainGray1 : Colors.white}>
          <TouchableOpacity
            centerV
            spread
            row
            onPress={() => {
              handleOpenDialog();
            }}>
            {mode === 'date' &&
              renderValue(
                _dateValue ? moment(_dateValue).format('DD/MM/YYYY') : null,
              )}
            {mode === 'time' &&
              renderValue(
                _dateValue ? moment(_dateValue).format('HH:mm') : null,
              )}
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date ? date : new Date()}
          mode={mode}
          onConfirm={pickedDate => {
            setOpen(false);
            _setDateValue(pickedDate);
            onChangeValue?.(pickedDate);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          minimumDate={minDate || undefined}
          maximumDate={maxDate || undefined}
          androidVariant="iosClone"
          is24hourSource="locale"
          title={mode === 'date' ? 'Chọn ngày' : 'Chọn giờ'}
          confirmText="Xác nhận"
          cancelText="Hủy"
          {...rest}
        />
      </View>
    </>
  );
}

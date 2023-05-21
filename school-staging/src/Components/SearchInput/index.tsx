import {View, Text, Colors} from 'react-native-ui-lib';
import {TextInput, TextInputProps, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

import styles from './styles';
import shadowBox from '@Utils/shadowBox';
import {ITopic} from '@Types/ITopic';

interface IInputField extends TextInputProps {
  label: string;
  isPassword?: boolean;
  error?: string;
  type?: string;
  important?: boolean;
  containerHeight?: number;
  inputBoxHeight?: number;
  borderRadius?: number;
  backgroundColor?: string;
  onCloseSuggestion?: () => void;
  disabledBoxShadow?: boolean;
  labelStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  showLabel?: boolean;
  options?: ITopic[];
  onChangeValue?: () => void;
}

export default function SearchInput({
  label,
  isPassword = false,
  onChangeText,
  borderRadius,
  disabledBoxShadow,
  containerStyle = {},
  showLabel = false,
  numberOfLines,
}: IInputField) {
  return (
    <>
      {showLabel && (
        <Text primarySemiBold black marginL-8>
          {label}
        </Text>
      )}
      <View
        centerV
        marginT-4
        marginB-12
        marginH-16
        paddingV-5
        style={[
          {
            backgroundColor: Colors.white,
            shadowOpacity: 10,
            borderRadius: borderRadius ? borderRadius : 50,
          },
          !disabledBoxShadow && shadowBox.boxShadow,
          containerStyle,
        ]}>
        {numberOfLines ? (
          <TextInput
            multiline
            textAlignVertical="top"
            numberOfLines={numberOfLines}
            onChangeText={onChangeText}
            secureTextEntry={isPassword}
            style={styles.textField}
            placeholder={label}
            placeholderTextColor={Colors.secondary}
            clearButtonMode="always"
          />
        ) : (
          <TextInput
            onChangeText={onChangeText}
            secureTextEntry={isPassword}
            style={styles.textField}
            placeholder={label}
            placeholderTextColor={Colors.secondary}
            clearButtonMode="always"
            textAlignVertical="top"
          />
        )}
      </View>
    </>
  );
}

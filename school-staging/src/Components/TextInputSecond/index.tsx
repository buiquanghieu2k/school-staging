import { Text, TextInput, TextInputProps, View } from "react-native";
import { Colors } from "react-native-ui-lib";
import styles from "./styles";
interface IInputField extends TextInputProps {
    label: string,
    value?: string,
    placeholder?: string,
    width?: any,
  }

export default function TextInputSecond({
    label,
    value,
    placeholder,
    width,
    onChangeText
}: IInputField) {
    return (
        <View style={[styles.container, { width: width }]}>
            <View style={styles.labelview}>
                <Text style={[styles.textview,{color:'#000'}]}>{label}</Text>
            </View>
            <TextInput onChangeText={onChangeText} style={[styles.textview, styles.inputview]} placeholder={placeholder} placeholderTextColor={Colors.purple50} />
        </View>
    )
}
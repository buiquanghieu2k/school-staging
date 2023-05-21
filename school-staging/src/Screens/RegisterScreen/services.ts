import ScreenNames from "@Constants/ScreenNames";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export default function useRegister(navigation: NativeStackScreenProps<any>) {
    const [name, setName] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [otp, setOTP] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    useEffect(() => {

    }, [])

    const RegisterHandle = () => {
        if (!name || !userName || !pass || !phone || !otp || !email) {
            Alert.alert('Vui lòng nhập đầy đủ thông tin!')
            return
        }
        console.log('okeeeee ', name, userName, pass, phone, otp, email);
    }

    const CancelHandle = () => {
        navigation.navigation.replace(ScreenNames.Login)
    }

    const SendOTP = () => {
        if (!phone.trim()) {
            Alert.alert('Vui lòng nhập số điện thoại!')
            return
        }
        console.log('okeeeee ', name, userName, pass, phone, otp, email);
    }
    return {
        RegisterHandle,
        CancelHandle,
        SendOTP,
        name,
        setName,
        userName,
        setUserName,
        pass,
        setPass,
        phone,
        setPhone,
        otp,
        setOTP,
        email,
        setEmail
    }
}
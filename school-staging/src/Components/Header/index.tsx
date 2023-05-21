import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Colors } from "react-native-ui-lib"
// import {Icon} from 'native-base'
export default function Header({
    title,
    iconLeft,
    iconRight,
    handleLeft,
    handleRight

}: {
    title?: string,
    iconName?: string,
    iconLeft?: boolean,
    iconRight?: string,
    handleLeft?: () => void,
    handleRight?: () => void
}) {
    return (
        <SafeAreaView>
            <StatusBar
                backgroundColor={'#F2BFF5'}
                barStyle="dark-content"
            />
            <LinearGradient style={styles.container} colors={['#F2BFF5', Colors.primary]}>
                <View style={styles.viewHeader}>
                    {iconLeft ?
                        <TouchableOpacity
                            onPress={handleLeft}>
                                <Image source={require('../../Assets/Image/backIcon.png')} style={{width:20, height:20, tintColor:'#fff'}}/>
                        </TouchableOpacity>
                        :
                        <View></View>
                    }
                    <Text style={styles.textTitle}>{title}</Text>
                    {iconRight ?
                        <TouchableOpacity>
                            <Text>back</Text>
                        </TouchableOpacity>
                        :
                        <View style={{width:20, height:20}}></View>
                    }
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: 60,
        justifyContent: 'flex-end'
    },
    viewHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
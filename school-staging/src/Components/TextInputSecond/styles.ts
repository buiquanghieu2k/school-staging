import { StyleSheet } from "react-native"
import { Colors } from "react-native-ui-lib"

export default StyleSheet.create({
    container: {
        borderWidth: 1.5,
        height: 50,
        marginVertical: 16,
        paddingHorizontal: 10, 
        borderRadius: 5, 
        borderColor: '#CDCBCD',
    },
    labelview:{
        backgroundColor: '#eee', 
        height: 20, 
        marginTop: -12, 
        marginHorizontal:10,
        alignSelf: 'flex-start', 
        paddingHorizontal: 3,
        position:'absolute',
    },
    textview:{
        fontWeight:'400',
        fontSize:16,
        color: Colors.purple50
    },
    inputview:{
        
    }
})
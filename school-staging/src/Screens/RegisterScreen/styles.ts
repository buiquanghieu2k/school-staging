import { StyleSheet } from "react-native"
import { Colors } from "react-native-ui-lib"

export default StyleSheet.create({
    container: {
        flex: 1
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonSend: {
        backgroundColor: Colors.primary,
        width: '30%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonAccept: {
        backgroundColor: Colors.primary,
        width: '45%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    textButton: {
        fontSize: 16,
        fontWeight: '700'
    },
    inputOTP: {
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 20,
        paddingHorizontal:15,
        fontWeight:'500',
        fontSize:16,
        color: Colors.purple50
    }
})
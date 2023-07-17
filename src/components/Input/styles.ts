import { StyleSheet } from "react-native";
import global from '../../theme/global'

const styles = StyleSheet.create({
    container: {    
        width: '100%',   
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,    

    },
    btn:{
        backgroundColor: global.secondColor,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
        margin: 2
    },
    input:{
       width: '80%',
        padding: 11,
        backgroundColor: global.textColorDark,
        color: global.textColorLigth,
        fontSize: 20,
        fontWeight: '300',
       borderRadius: 5
    }
})
export default styles;
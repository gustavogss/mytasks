import { StyleSheet } from "react-native";
import global from '../../theme/global'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        fontSize: 20,
        marginTop: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: global.primaryColor
    }
})
export default styles;
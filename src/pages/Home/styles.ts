import { StyleSheet } from "react-native";
import {theme} from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.banckgroundColor
    },
    title:{
        fontSize: 20,
        marginTop: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.colors.primaryColor
    },
    resultado: {
        fontSize: 18,
        fontFamily: theme.font_family.ligth,
        padding: 20,        
        color: theme.colors.textColorDark
    },
    areaResultado:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default styles;
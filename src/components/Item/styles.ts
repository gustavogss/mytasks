import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
    container: {  
        margin: 5,
        padding: 20,   
        backgroundColor: theme.colors.primaryColor,    
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5
    },
    task:{
        fontFamily: theme.font_family.ligth,
        color: theme.colors.textColorLigth
    }
})
export default styles;
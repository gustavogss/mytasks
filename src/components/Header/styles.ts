import { StyleSheet } from "react-native";
import {theme} from '../../theme'

const styles = StyleSheet.create({
 container:{
    height: '25%',
    backgroundColor: theme.colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',    
 },
 logo:{    
    paddingTop: 40
 }
})
export default styles;
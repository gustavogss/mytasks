import { StyleSheet } from "react-native";
import global from '../../theme/global'

const styles = StyleSheet.create({
 container:{
    height: '25%',
    backgroundColor: global.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',    
 },
 logo:{    
    paddingTop: 40
 }
})
export default styles;
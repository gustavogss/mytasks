import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent/>
      <Home />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});
import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Item } from '../../components/Item';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <View style={styles.areaResultado}>
        <Text style={styles.resultado}>Criadas: </Text>
        <Text style={styles.resultado}>Concluídas: </Text>
      </View >
      <Item />
      {/* <FlatList 
      showsVerticalScrollIndicator={false}
      
      /> */}
    </View>
  )
}
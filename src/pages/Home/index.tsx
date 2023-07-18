import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Task } from '../../components/Task';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <View style={styles.tasks}>
        <View style={styles.areaTask}>
        <Text style={styles.taskCreate}>Criadas: </Text>
        <Text style={styles.count}>1</Text>
        </View>
        <View style={styles.areaTask}>
        <Text style={styles.taskFinish}>Concluídas: </Text>
        <Text style={styles.count}>0</Text>
        </View>
       
      </View >
      <Task title='Estudar React Native' isTaskCompleted={false}/>
      <Task title='Estudar React' isTaskCompleted />
      <Task title='Estudar Java Script' isTaskCompleted />
      
      {/* <FlatList 
      showsVerticalScrollIndicator={false}
      
      /> */}
    </View>
  )
}
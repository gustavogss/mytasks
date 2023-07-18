import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Task } from '../../components/Task';
import { TaskProps } from '../../Interfaces';

export function Home() {
  const [task, setTask] = useState<TaskProps[]>([
    { id: '1', isTaskCompleted: false, title: 'Estudar React Native' },
    { id: '2', isTaskCompleted: false, title: 'Estudar Node' },
    { id: '3', isTaskCompleted: true, title: 'Estudar Javascript' }
  ]);
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

      <FlatList 
      data={task}
      keyExtractor={(task) => task.id!}
      showsVerticalScrollIndicator={false}      
      renderItem={({item})=> (
      <Task 
      key={item.id} 
      isTaskCompleted={item.isTaskCompleted}
      title={item.title}
      />
      )}      
      />
    
      
    
    </View>
  )
}
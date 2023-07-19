import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Task } from '../../components/Task';
import { ITask } from '../../Interfaces';
import { Empty } from '../../components/Empty';
import { uuid } from '../../../utils/uuid';


export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([
    // { id: '1', isTaskCompleted: false, title: 'Estudar React Native' },
    // { id: '2', isTaskCompleted: false, title: 'Estudar Node' },
    // { id: '3', isTaskCompleted: true, title: 'Estudar Javascript' }
  ]);
  const [newTask, setNewTask] = useState('');
  function handleAddTask() {
    setTasks((tasks) => [...tasks, {id: uuid(), isTaskCompleted: false, title: newTask}]); 
    setNewTask('');
  }
  return (
    <View style={styles.container}>
      <Header />
      <Input task={newTask} onChangeText={setNewTask} onPress={handleAddTask}/>
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
      data={tasks}
      keyExtractor={(task) => task.id!}
      showsVerticalScrollIndicator={false}      
      renderItem={({item})=> (
      <Task 
      key={item.id} 
      isTaskCompleted={item.isTaskCompleted}
      title={item.title}
      />
      )}  
      ListEmptyComponent={<Empty />}    
      />
    
      
    
    </View>
  )
}
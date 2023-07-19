import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import { theme } from '../../theme'
import { IInput } from '../../Interfaces'

export function Input({task, onChangeText, onPress}:IInput) {
 
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Adicione uma nova tarefa...'
      placeholderTextColor={theme.colors.primaryColor}
      keyboardType='default'
      value={task}
      onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Feather name='plus' size={24} color={'white'}/>
      </TouchableOpacity>
    </View>
  )
}
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import { theme } from '../../theme'

export function Input() {
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Adicione uma nova tarefa...'
      placeholderTextColor={theme.colors.primaryColor}
      keyboardType='default'
      />
      <TouchableOpacity style={styles.btn}>
          <Feather name='plus' size={24} color={'white'}/>
      </TouchableOpacity>
    </View>
  )
}
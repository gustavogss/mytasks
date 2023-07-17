import { View, Text } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import { theme } from '../../theme'
import styles from './styles'

export function Item() {
  return (
    <View style={styles.container}>      
      <Text style={styles.task}>Tarefa 1</Text>
      <Feather name='trash' size={24} color={theme.colors.textColorDark}/>
    </View>
  )
}
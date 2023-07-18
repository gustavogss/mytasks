import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";
import styles from "./styles";

type TaskProps = {
  id?: string;
  title: string;
  isTaskCompleted: boolean;
}

export function Task({title, isTaskCompleted}: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name={isTaskCompleted ? "check-circle": "circle"} size={24} color={isTaskCompleted ? theme.colors.secondColor : theme.colors.textColorLigth } />
      </TouchableOpacity>
      <Text style={isTaskCompleted ? styles.taskDone : styles.taskCreate}>{title}</Text>
      <TouchableOpacity>
        <Feather name="trash" size={24} color={theme.colors.iconColor} />
      </TouchableOpacity>
    </View>
  );
}
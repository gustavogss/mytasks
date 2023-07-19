export interface ITask {
    id: string;
    title: string;
    isTaskCompleted: boolean;
}

export interface IInput {
    task: string;
    onChangeText: (task: string) => void;  
    onPress: () => void;    
}
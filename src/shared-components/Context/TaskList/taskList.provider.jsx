import {TaskListContext} from './taskList.context';
import { useState, useEffect } from "react";

function TaskListProvider({ children }) {
    const [taskList, updatedTaskList] = useState(() => {
    const stored = JSON.parse(localStorage.getItem('tasks'));
    
    return stored ? stored : []
  }); 

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  },[taskList])

  return (
    <TaskListContext.Provider value={[taskList, updatedTaskList]}>
        {children}
    </TaskListContext.Provider>
  );
}


export default TaskListProvider;
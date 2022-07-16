import {FilteredTasksContext} from './filteredTasks.context';
import { useState, useEffect } from "react";

function FilteredTasksProvider({ children }) {
  
    const [filteredTaskList, updatedFilteredTaskList] = useState(() => {
    const stored = JSON.parse(localStorage.getItem('tasks'));
   
    return stored ? stored : []
  }); 

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(filteredTaskList))
  },[filteredTaskList])

  return (
    <FilteredTasksContext.Provider value={[filteredTaskList, updatedFilteredTaskList]}>
        {children}
    </FilteredTasksContext.Provider>
  );
}


export default FilteredTasksProvider;
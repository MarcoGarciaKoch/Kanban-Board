# TODO App

This project consist of the creation of a TODO App application.
 

This was one of the first projects with `React` I did during my Full Stack Development Bootcamp and the technological stack used was:

- **React 18.1.0**
- **CSS3**

The application has the following main features:

- The user can create a new task.
- The user can move the tasks between the different sections (ToDo, In Progress or Done). 
- The user can filter tasks by typing a minimum of 3 letters.
- The user can delete any task one by one, or all at once in the Done section. 


# Repository Structure

It only consists on the app client side.


# Front End

One of the remarkable implementations is the use of various Context hook to make data available for the different components.
An example of it is the `FilteredTasks Context` hook as it follows:

```js
// filteredTasks.context.js
import { createContext} from 'react';

    
export const FilteredTasksContext = createContext([]);


//filteredTasks.provider.jsx
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
```


# Deployment

The application has been deployed using GitHub Pages on the following url:

- https://marcogarciakoch.github.io/speech-to-text-app/


# Local setup

Although it is deployed in GitHub Pages, it can be configured to run in a local environment.

To do so, the following steps must be performed:

1. Clone the monorepo
    > git clone https://github.com/MarcoGarciaKoch/kanban-board.git

2. On root folder run install

    > npm i

3. Now you can start the app as it follows:

    > npm start  (It will start the application)


# Future improvements

- Login and register using for example Firebase Auth
- Create more than one list saving it on your private profile
- Edit a task without the need of remove it
- Drag & Drop tasks from one section to another using native JS events or react-draggable library 
- Share a list using Web Share API
- Speech a task using Web Speech API
- Real time Collaboraton list using Socket IO

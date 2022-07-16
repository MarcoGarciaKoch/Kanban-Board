import { useState, useContext } from 'react';
import './style.css';
import { TaskListContext } from '../../../../shared-components/Context/TaskList/taskList.context';
import { CounterContext } from '../../../../shared-components/Context/Counter/counter.context';
import { FilteredTasksContext } from '../../../../shared-components/Context/FilteredTasks/filteredTasks.context';
import { UpdatedMainDateContext } from '../../../../shared-components/Context/UpdatedMainDate/updatedMainDate.context';

function GenerateNewTask ({createNewTask, onClickCancel, statusName, hideTaskGenerator}) {
    const [isThereText, updateIsThereText] = useState('');
    const [clearTextArea, updateClearTextArea] = useState('');
    const [counter, updateCounter] = useContext(CounterContext);
    const [,updatedTaskList] = useContext(TaskListContext);
    const [,updatedFilteredTaskList] = useContext(FilteredTasksContext);
    const [,updateMainDate] = useContext(UpdatedMainDateContext);
    

    // Function that gets the value written in the text area
    const getAreaTextValue = e => {
        let textValue = e.target.value;
        updateIsThereText(textValue);
        updateClearTextArea(textValue);
    }

    // Function that hides the task generator and removes the text area value when clicking in the cancel button
    const cancelTaskGenerator = () => {
        onClickCancel(false);
        updateClearTextArea('');
    }
    
    // Function that generates a new task, updates the list of tasks, updates the id counter and removes the text area value and hides the task generator, when clicking the add button.
    const addNewtask = () => {
        const date = new Date().toLocaleString();
        const task = {
            id: counter,
            taskText: isThereText,
            statusOfTask: statusName,
            date: date
        }

        if(isThereText !== ''){
            updateCounter(prevCounter => prevCounter += 1);
            updatedTaskList(prevtask => [...prevtask,task]);
            updatedFilteredTaskList(prevtask => [...prevtask,task]);
    
            updateClearTextArea('');
            hideTaskGenerator(false);
            updateIsThereText('');

            updateMainDate(new Date().toLocaleString());
        }
    }

    return (
        <section className={createNewTask ? 'new-task__container-visible': 'new-task__container-hidden'}>
            <textarea onChange={getAreaTextValue} className='text-area' value={clearTextArea} name="create-task" id="task" cols="60" rows="3" charswidth="62" placeholder='Enter a note'></textarea>
            <div className='new-task-buttons__container'>
                <button onClick={addNewtask} className={`button ${isThereText.length > 0 ? 'add__button--active' : 'add__button--inactive'}`}>Add</button>
                <button onClick={cancelTaskGenerator} className='button cancel__button'>Cancel</button>
            </div>
        </section>
    )
}


export default GenerateNewTask;
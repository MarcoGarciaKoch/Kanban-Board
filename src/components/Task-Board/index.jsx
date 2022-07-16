import './style.css';
import {AiOutlinePlus} from 'react-icons/ai';
import GenerateNewTask from './components/Generate-New-Task';
import Task from './components/Task';
import { useContext, useState } from 'react';
import { FilteredTasksContext } from '../../shared-components/Context/FilteredTasks/filteredTasks.context';
import { TaskListContext } from '../../shared-components/Context/TaskList/taskList.context';
import { UpdatedMainDateContext } from '../../shared-components/Context/UpdatedMainDate/updatedMainDate.context';

function TaskBoard ({taskStatus}) {
    const [isCreateNewTask, updateIsCreateNewTask] = useState(false);
    const [, updatedTaskList] = useContext(TaskListContext);
    const [filteredTaskList, updatedFilteredTaskList] = useContext(FilteredTasksContext);
    const [, updateMainDate] = useContext(UpdatedMainDateContext);

    // Function that receives from GenerateNewTask (child) component hideTaskGenerator prop set to False, to hide the task generator.
    const hideTaskGenerator = boolean => {
        updateIsCreateNewTask(boolean);
    }

    //Function that deletes the selected task card when clickin in the bin button. Receives data from child (Task).
    const deleteTask = id => {
        updatedTaskList(prevList => [...prevList].filter(t => t.id !== id));
        updatedFilteredTaskList(prevList => [...prevList].filter(t => t.id !== id));
        updateMainDate(new Date().toLocaleString());
    }

    //Function that counts how many cards are there in each board
    const cardQty = () => {
        const qty = filteredTaskList.filter(t => t.statusOfTask === taskStatus);
        return qty.length;
    }

    //Function that removes all the cards from the Done board
    const clearAllDone = () => {
        const clearDone = filteredTaskList.filter(t => t.statusOfTask !== taskStatus);
        updatedTaskList(clearDone);
        updatedFilteredTaskList(clearDone);
        updateMainDate(new Date().toLocaleString());
    }

    return (
        <main className='board-main__container'>
            <header className='board-header__container'>
                <section className='section__container'>
                    <div className='qty-cards'>{cardQty()}</div>
                    <p className='board-title'>{taskStatus}</p>
                </section>
                <section className='clear__container'>
                    <AiOutlinePlus onClick={() => updateIsCreateNewTask(true)} className='add-card__button'></AiOutlinePlus>
                    {taskStatus==='Done' ? <div onClick={clearAllDone} className='clear-all__button'>Clear All</div> : ''}
                </section>
            </header>
            <section className='tasks-scroll__container'>
                <GenerateNewTask createNewTask={isCreateNewTask} onClickCancel={boolean => updateIsCreateNewTask(boolean)} hideTaskGenerator={hideTaskGenerator} 
                                 statusName={taskStatus}></GenerateNewTask>
                {filteredTaskList.map(t => t.statusOfTask === taskStatus ? <Task key={t.id} statusColor={t.statusOfTask} taskDetails={t} onDeleteTask={deleteTask}></Task> : '')}
            </section>
        </main>
    )
}


export default TaskBoard;
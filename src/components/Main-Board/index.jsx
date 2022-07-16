import './style.css';
import TaskBoard from '../Task-Board';
import { BsSearch } from 'react-icons/bs';
import { useContext } from 'react';
import { FilteredTasksContext } from '../../shared-components/Context/FilteredTasks/filteredTasks.context';
import { TaskListContext } from '../../shared-components/Context/TaskList/taskList.context';
import { UpdatedMainDateContext } from '../../shared-components/Context/UpdatedMainDate/updatedMainDate.context';

function MainBoard () {
    const boardStatusOptions = ['To Do', 'In Progress', 'Done'];
    const [taskList] = useContext(TaskListContext);
    const [, updatedFilteredTaskList] = useContext(FilteredTasksContext);
    const [mainDate] = useContext(UpdatedMainDateContext);

    const getInputValue = e => {
        if(e.target.value.length >=3){
        const value = e.target.value.toLowerCase();
        const filteredArr = taskList.filter(t => t.taskText.includes(value));
        updatedFilteredTaskList(filteredArr);
        }else {
            updatedFilteredTaskList(taskList);
        }
    }

    return (
        <main className='main-board__container'>
            <section className='version-filter__container'>
                <div className='version-update__container'>
                    <p className='version'>Version 1.0</p>
                    <p className='last-update'>{`Updated on ${mainDate}`}</p>
                </div>
                <div className='filter-input__container'>
                    <BsSearch className='filter-icon'></BsSearch>
                    <input onChange={getInputValue} className="filter-task" id="filter" type="text" minLength={3} placeholder="Filter Tasks" />
                </div>
            </section>
            <section className='card-boards__container'>
                {boardStatusOptions.map((s,i) => <TaskBoard key={i} taskStatus={s}></TaskBoard>)}
            </section>
        </main>
    )
}


export default MainBoard;
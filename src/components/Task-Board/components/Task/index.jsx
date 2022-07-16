import './style.css';
import {ImBin2} from 'react-icons/im';
import {SiTarget} from 'react-icons/si';
import { BsArrowLeftSquare, BsArrowRightSquareFill } from 'react-icons/bs';
import { useContext } from 'react';
import { TaskListContext } from '../../../../shared-components/Context/TaskList/taskList.context';
// import Draggable from 'react-draggable';

function Task ({taskDetails, onDeleteTask}) {
        const [taskList, updatedTaskList] = useContext(TaskListContext);

        const moveTaskLeft = () => {
            if(taskDetails.statusOfTask === 'In Progress') taskDetails.statusOfTask = 'To Do';
            if(taskDetails.statusOfTask === 'Done') taskDetails.statusOfTask = 'In Progress';
            const updatedList = taskList.filter(t => t.id !== taskDetails.id);

            updatedTaskList([...updatedList, taskDetails]);
        }

        const moveTaskRight = () => {
            if(taskDetails.statusOfTask === 'In Progress') taskDetails.statusOfTask = 'Done';
            if(taskDetails.statusOfTask === 'To Do') taskDetails.statusOfTask = 'In Progress';
            const updatedList = taskList.filter(t => t.id !== taskDetails.id);

            updatedTaskList([...updatedList, taskDetails]);
        }

        return (
            <main className='card__container' draggable>
                <section className='card-section__container'>
                    <div className='info__container'>
                        <SiTarget className={taskDetails.statusOfTask !== 'Done' ? 'status' : 'status-red'}></SiTarget>
                    </div>
                    <div className='title'>{taskDetails.taskText}</div>
                    <ImBin2 onClick={() => onDeleteTask(taskDetails.id)} className='delete-button'></ImBin2>
                </section>
                <section className='details__container'>
                    <div className='details__box'>
                        <p className='id'>#{taskDetails.id}</p>
                        <p className='created-on-text'>created on </p>
                        <p className='date'>{taskDetails.date}</p>
                    </div>
                    <div className='arrows__box'>
                        {taskDetails.statusOfTask !== 'To Do' ? <BsArrowLeftSquare onClick={moveTaskLeft} className='arrow'></BsArrowLeftSquare> : ''}
                        {taskDetails.statusOfTask !== 'Done' ? <BsArrowRightSquareFill onClick={moveTaskRight} className='arrow'></BsArrowRightSquareFill> : ''}
                    </div>
                    
                </section>
            </main>
        );
}


export default Task;
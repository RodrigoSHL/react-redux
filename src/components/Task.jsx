import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getTaskAction } from '../redux/taskDuck';

const Task = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTaskAction())
    }, [])
    const tasks = useSelector(store=> store.tasks.data)
  return (
    <div>
       <h2>Task</h2> <hr />
       <button className='btn btn-info' 
    //    onClick={() => dispatch(getTaskAction())}
       >
            GetTask
        </button>
        <ul>
            {
                tasks.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Task
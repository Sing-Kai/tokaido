import {useState, useContext} from 'react'
import { TasksContext, TasksDispatchContext } from './TasksContext'

const TaskList = () => {

  const tasks = useContext(TasksContext)

  return (
    <ul>
      {
        tasks.map((t)=> (
          <li key={t.id}>
            <Task
              task={t}
            />
          </li>
        ))
      }
    </ul>
  )
}

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let taskContent; 

  const onHandleChange = (e) => {
    dispatch({
      type: 'changed',
      task: {
        ...task,
        text: e.target.value
      }
    })
  }

  const onHandleDeleteClick = (e)=> {
    dispatch({
      type: 'deleted',
      id: task.id
    });
  }

  if(isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={onHandleChange}
        />
        <button onClick={() => setIsEditing(false)} >
          Save
        </button>
      </>
    )
  } else{
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (<label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={onHandleChange}
      />
      {taskContent}
      <button onClick={onHandleDeleteClick}>
        Delete
      </button>
  </label>)
}




export default TaskList
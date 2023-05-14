import {useState} from 'react'

const TaskList = ({ task, onChange, onDelete }) => {

  const [isEditing, setIsEditing] = useState(false);

  let taskContent; 

  if(isEditing) {
    taskContent = (
      <>
        <input/>
        <button>
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
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
  </label>)
}


const Task = ({ task, onChange, onDelete }) => {

}




export default TaskList
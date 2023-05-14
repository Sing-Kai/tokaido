import {useState} from 'react'
import { useTasksDispatch } from './TasksContext.js';

let nextId = 3;

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  const handleOnClick = () =>{
    setText('')
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    }); 
  }

  return (<>
    <input
      placeholder="add a task"
      value={text}
      onChange={e => setText(e.target.value)}
    />
    <button onClick={handleOnClick}>
      Add
    </button>
  </>)
}

export default AddTask
import {useState} from 'react'

const AddTask = ({onAddTask}) => {
  const [text, setText] = useState('');

  const handleOnClick = () =>{
    setText('')
    onAddTask(text)
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
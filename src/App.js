import { useReducer } from 'react';
import TaskList from './TastList';
import AddTask from './ AddTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Journey to Tokaido</h1>
      <AddTask/>
    </div>
  );
}

// const taskReducer = (tasks, action)=> {
//   switch(action.type){
//     case 'added'
//       return 
//   }
// }

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

export default App;

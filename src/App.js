import { useReducer } from 'react';
import TaskList from './TastList';
import AddTask from './ AddTask';
import { TasksProvider} from './TasksContext.js';
import './App.css';

function App() {

  return (

    <TasksProvider>
      <div className="App">
        <h1>Journey to Tokaido</h1>
        <AddTask/>
        <TaskList />
      </div>
    </TasksProvider>
  );
}



export default App;

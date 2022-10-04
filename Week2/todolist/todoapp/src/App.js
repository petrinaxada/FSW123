import './App.css';
import TheList from './ToDoList.js'
import todolist from './STORE.js'

function App() {
  return (
    <ul>
      <TheList task = {todolist}/>
    </ul>
  );
}

export default App;

///assisted by E.Yarborough///
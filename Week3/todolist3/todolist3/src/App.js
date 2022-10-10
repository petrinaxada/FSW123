import './App.css';
import TheList from './ToDoList.js'
import todolist from './STORE.js'
import {useState} from 'react'

function App() {

const [array, setArray]=useState(todolist) 
function completeTodo(uuid){
  console.log(uuid)
  const copy =[...array]
  copy.forEach (task=> {
    if(task.id === uuid){
      task.isCompleted = !task.isCompleted
      return task
    }
      return task
    })
    console.log(copy)
    setArray(copy)
}
function deleteTodo(uuid){
  console.log(uuid)
  const copy = array.filter (task=> {
    if(task.id === uuid){
      return 0 
    }
      return 1
    })
    console.log(copy)
    setArray(copy)
}
  return (
    <ul>
      <TheList tasks = {array}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
/>
    </ul>
  );
}

export default App;
///assisted by E.Yarborough & G. MArtinez-Sanchez///
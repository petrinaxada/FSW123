import {useState} from 'react'

function ToDoForm(props){
const [task, setTask]=useState("") 

    return(<form>
       <input 
            type="text" value={task} 
           onChange = {e=>{
            setTask(e.target.value)
           }}
            ></input>

                <button
                 onClick = {e=>{
                    e.preventDefault() 
                    if (task.length > 0)
                    props.addTodo(task)
                 }}
                 >Add ToDo Things</button>
            </form>)
}

export default ToDoForm
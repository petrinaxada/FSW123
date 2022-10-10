export default function Task(props) {
    return ( <li>
            <input 
            type="checkbox" 
            checked={props.task.isCompleted}
            onChange = {e=>props.completeTodo(props.task.id)}
            ></input>
                <label>{props.task.task}</label>
                <button onClick = {e=>props.deleteTodo(props.task.id)}>Borrar</button>
            </li>)
}
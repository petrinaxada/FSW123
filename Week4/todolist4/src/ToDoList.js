import Todo from "./todo"
export default function TheList(props) {
    return (
        <ul>
            {props.tasks.map((task) => {
                return (<Todo task={task}
                    completeTodo={props.completeTodo}
                    deleteTodo={props.deleteTodo}
                />
                )
            })}
        </ul>
    );
}

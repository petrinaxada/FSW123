import { v4 as uuidv4 } from "uuid"

const todos = [
    {
        id: uuidv4(),
        isCompleted: true,
        task: "Eat"},
    {
        task: "Sleep",
        id: uuidv4(),
        isCompleted: true,
    },
    {
        task: "Watch TV",
        id: uuidv4(),
        isCompleted: true,
    },
    {
        task: "Pick Up Kids",
        id: uuidv4(),
        isCompleted: true,
    },
    {
        task: "Grocery Shopping",
        id: uuidv4(),
        isCompleted: true,
    },
    {
        task: "Do homework",
        id: uuidv4(),
        isCompleted: true,
    }
]
export default todos;
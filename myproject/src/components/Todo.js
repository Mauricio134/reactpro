import { useState } from "react"
import List from '../components/List.js'
export default function Todo(){
    const [todo,setTodo] = useState("");
    const [todoList, setList] = useState([]);

    const handleTodo = (event) =>{
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let List = todoList;
        List.push(todo);
        setList(List);
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value = {todo} onChange = {handleTodo} type = "text"></input>
                <button type = "submit">Add</button>
            </form>
            {todoList.map((item, index) => (
                <List key = {index} name = {item}>List Name</List>
            ))}
        </div>
    );
}
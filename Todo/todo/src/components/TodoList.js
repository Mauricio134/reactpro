import Todo from "./Todo";

const TodoList = ({todoList}) =>{
    return (<div>
        {todoList.map((item) => (
            <Todo key = {item.id} name = {item.name}/>
        ))}
    </div>);
}

export default TodoList;
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import {useState} from "react";
function App() {
  const [todo,setTodo] = useState("");
  const [todoList,setList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form todo ={todo} setTodo = {setTodo} todoList = {todoList} setList= {setList}></Form>
      <TodoList todoList = {todoList} />
    </div>
  );
}

export default App;

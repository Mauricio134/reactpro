import styles from '../style.module.css';
import shortid from 'shortid';

const Form = ({todo, setTodo, todoList, setList}) => {
    const handleChange = (event) =>{
        setTodo(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setList([...todoList, {name:todo,id:shortid.generate()}]);
        setTodo("");
    }
    return (<div>
        <form onSubmit = {handleSubmit} className = {styles.todoform}>
            <input value = {todo} onChange={handleChange} className = {styles.todoinput} placeholder = "Add New Item"></input>
            <button type= "submit" className = {styles.todobutton}>Add</button>
        </form>
    </div>)
}

export default Form;
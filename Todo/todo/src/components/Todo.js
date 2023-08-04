import styles from '../style.module.css';

const Todo = ({name}) => {
    return (<div>
        <div className = {styles.todoitem}>
            <h3 className = {styles.todoname}>{name}</h3>
            <button className = {styles.deletebutton}>Done</button>
        </div>
    </div>);
}

export default Todo;
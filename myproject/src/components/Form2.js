import {useState} from "react";

export default function Form(props){
    let [firstname, firstnameState] = useState(props.name);
    let [lastname, lastState] = useState(props.lastname);
    const handleValue = (event) =>{
        firstnameState(firstname = event.target.value)
    }
    const handleLastValue = (event) =>{
        lastState(lastname = event.target.value)
    }
    return (
        <div>
            Form
            <form>
                <input
                    onChange = {handleValue}
                    type = "text"
                    value = {firstname}
                >
                </input>
                <input
                    onChange = {handleLastValue}
                    type = "text"
                    value = {lastname}
                >
                </input>
            </form>
        </div>
    );
}
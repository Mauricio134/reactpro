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
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fname: firstname,
            lname: lastname,
        })
    }
    return (
        <div>
            Form
            <form onSubmit = {handleSubmit}>
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
                <button type = "submit">Submit</button>
            </form>
        </div>
    );
}
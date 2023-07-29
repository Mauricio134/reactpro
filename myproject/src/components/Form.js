import {Component} from "react";

export default class Form extends Component{
    state = {
        firstname : this.props.name,
        lastname: this.props.lastname,
    };

    handleValue = (event) =>{
        this.setState({
            firstname: event.target.value,
        })
        console.log(this.state.firstname)
    }

    handleLastValue = (event) =>{
        this.setState({
            lastname: event.target.value,
        })
        console.log(this.state.lastname)
    }

    render(){
        return (
            <div>
                Form
                <form>
                    <input
                        onChange = {this.handleValue}
                        type = "text"
                        value = {this.state.firstname}
                    ></input>
                    <input
                        onChange = {this.handleLastValue}
                        type = "text"
                        value = {this.state.lastname}
                    ></input>
                </form>
            </div>
        )
    }
}
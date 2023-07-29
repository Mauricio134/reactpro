import {useState} from "react";
function FunState(){
    const [cont, setCont] = useState(0);

    const incrementar = () =>{
        setCont(cont+1);
    }
    return (
        <div>
            <h1>Contador: {cont}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}

export default FunState;
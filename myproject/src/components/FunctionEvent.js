function FunctionEvent(){
    const handlebutton = () =>{
        console.log('Button Clicked!');
    }
    return (
        <div>
            Press Button:
            <button onClick = {handlebutton}>Click</button>
        </div>
    );
}

export default FunctionEvent;
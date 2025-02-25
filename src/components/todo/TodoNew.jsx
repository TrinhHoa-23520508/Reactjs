import { useState } from "react";
const TodoNew = (props) =>{
    const {addNewToDo} = props;
    const [ValueInput, setValueInput] = useState("");
    // addNewToDo("Hoa");
    const handleClick = () =>{
        alert("click me");
    }
    const handleOnChange = (value) =>{
        console.log(">>input value", value)
        setValueInput(value);

    }
    return (
        <>
        <div className="todo-new">
          <input type="text" onChange={(event)=>{handleOnChange(event.target.value)}}/>
          <button
           style={{cursor :"pointer"}}
           onClick={handleClick}>Add</button>
           <div>My input is {ValueInput}</div>
        </div>
        </>
    );
}
export default TodoNew;
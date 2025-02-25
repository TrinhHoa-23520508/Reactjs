import { useState } from "react";
const TodoNew = (props) =>{
    const {addNewToDo} = props;
    const [ValueInput, setValueInput] = useState("");
    // addNewToDo("Hoa");
    const handleClick = () =>{
       addNewToDo(ValueInput);
       setValueInput("");
    }
    const handleOnChange = (value) =>{
        setValueInput(value);

    }
    return (
        <>
        <div className="todo-new">
          <input type="text" onChange={(event)=>{handleOnChange(event.target.value)}} value={ValueInput}/>
          <button
           style={{cursor :"pointer"}}
           onClick={handleClick}>Add</button>
           <div>My input is {ValueInput}</div>
        </div>
        </>
    );
}
export default TodoNew;
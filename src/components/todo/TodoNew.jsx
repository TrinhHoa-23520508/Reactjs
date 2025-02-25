const TodoNew = (props) =>{
    const {addNewToDo} = props;
    // addNewToDo("Hoa");
    const handleClick = () =>{
        alert("click me");
    }
    const handleOnChange = (name) =>{
        console.log(">>input value", name)
    }
    return (
        <>
        <div className="todo-new">
          <input type="text" onChange={(event)=>{handleOnChange(event.target.value)}}/>
          <button
           style={{cursor :"pointer"}}
           onClick={handleClick}>Add</button>
        </div>
        </>
    );
}
export default TodoNew;
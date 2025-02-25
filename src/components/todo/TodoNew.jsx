const TodoNew = (props) =>{
    const {addNewToDo} = props;
    addNewToDo("Hoa");
    return (
        <>
        <div className="todo-new">
          <input type="text"/>
          <button>Add</button>
        </div>
        </>
    );
}
export default TodoNew;
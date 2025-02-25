
const TodoData = (props) =>{
    const {toDoList, deleteToDo} = props;
    const handelDeleteClick = (id) =>{
        deleteToDo(id);
    }
    return (
        <>
    <div className="todo-data">
       {toDoList.map((item, index)=>{
        return(
            <div className="todo-item" key={item.id}>
                <div>{item.name}</div>
                <button style={{cursor: "pointer"}}
                onClick={()=>handelDeleteClick(item.id)}>Delete</button>
                </div>
        )
       })}
      </div>
      </>);
}
export default TodoData;
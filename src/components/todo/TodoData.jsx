
const TodoData = (props) =>{
    const {toDoList} = props;
    return (
        <>
    <div className="todo-data">
       {toDoList.map((item, index)=>{
        return(
            <div className="todo-item" key={item.id}>
                <div>{item.name}</div>
                <button>Delete</button>
                </div>
        )
       })}
      </div>
      </>);
}
export default TodoData;
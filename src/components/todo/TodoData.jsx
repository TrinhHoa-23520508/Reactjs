
const TodoData = (props) =>{
    const {name, age, data} = props;
    return (
        <>
    <div className="todo-data">
        <div>My name is {name}</div>
        <div className="todo-item">learn</div>
        <div className="todo-item">watching film</div>
      </div>
      </>);
}
export default TodoData;
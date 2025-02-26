import "./todo.css"
import reactLogo from '../../assets/react.svg'
import TodoData from "./TodoData"
import TodoNew from "./TodoNew"
import { useState } from "react"
const ToDoApp = () => {
    const [toDoList, setToDoList] = useState(
        []
      )
      const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
        }
      const addNewToDo = (name) =>{
        const newToDo = {
          id: randomIntFromInterval(1, 1000000),
          name: name
        }
        setToDoList([...toDoList, newToDo]);
      }
      const deleteToDo = (id) =>{
        const newToDo = toDoList.filter((toDo) => {
          return toDo.id!==id;
        });
        setToDoList(newToDo);
      }
      return (
        <div className="todo-container">
        <div className="todo-title">ToDo List</div>
        <TodoNew
         addNewToDo={addNewToDo}/>
         {toDoList.length == 0 ?
        <div className="todo-image">
          <img src={reactLogo} className="logo"/>
        </div>
        :
        <TodoData
         toDoList={toDoList}
         deleteToDo={deleteToDo}/>
         }
       </div>
      )
}
export default ToDoApp;
import "./components/todo/todo.css"
import reactLogo from './assets/react.svg'
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
import { useState } from "react"
const App = () => {
  const name = "Trinh Hoa";
  const age = 20;
  const data = {
    address: "pleiku",
    country: "Viet Nam"
  }
  const [toDoList, setToDoList] = useState(
    [{id: 1, name: "learn"},
    {id: 2, name: "watching film"}
  ]
  )
  const addNewToDo = (name) =>{
    alert(`My name is ${name}`);
  }
   return (
    <>
       <div className="todo-container">
        <div className="todo-title">ToDo List</div>
        <TodoNew
         addNewToDo={addNewToDo}/>
        <TodoData
         name = {name}
         age = {age}
         data = {data}
         toDoList={toDoList}/>
        <div className="todo-image">
          <img src={reactLogo} className="logo"/>
        </div>
       </div>
    </>
  )
}

export default App

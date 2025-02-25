import "./components/todo/todo.css"
import reactLogo from './assets/react.svg'
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
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

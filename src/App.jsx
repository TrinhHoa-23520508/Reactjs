import "./components/todo/todo.css"
import reactLogo from './assets/react.svg'
const App = () => {

   return (
    <>
       <div className="todo-container">
        <div className="todo-title">To Do List</div>
        <div className="todo-new">
          <input type="text"/>
          <button>Add</button>
        </div>
        <div className="todo-data">
          <div className="todo-item">learn</div>
          <div className="todo-item">watching film</div>
        </div>
        <div className="todo-image">
          <img src={reactLogo} className="logo"/>
        </div>
       </div>
    </>
  )
}

export default App

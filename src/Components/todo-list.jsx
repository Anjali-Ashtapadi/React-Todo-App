import '../assets/todo-list-style.css';
import React,{useState} from 'react';

function TodoList(){
  const [Input,setInput] = useState("");
  const [TodoList, setTodoList] = useState([]);

  const addTodoItem = () =>{
    if (Input.trim() === ""){
      alert(`Please enter a task.`)
      return;
    };
    const item ={
      id:TodoList.length + 1,
      text:Input.trim(),
      completed:false
    }
    setTodoList(prev => [...prev,item]);
    setInput("");
  }

  const toggleCompleted = (id) =>{
      setTodoList(
        TodoList.map(todo =>{
          if (todo.id === id){
            return{
              ...todo,
              completed:!todo.completed
            };
          }else{
            return todo;
          }
        })
      )
    }

  const deleteTodo = (id) =>{
    setTodoList(
      TodoList.filter(todo => (todo.id !==id ))
    )
  }
  return(
    <div className='todo-container'>
      <h2>Todo List Using React</h2><br />
      <input type="text" placeholder="Enter task" className='todo-input' value={Input} onChange={(e) => setInput(e.target.value)}/> 
      <button className='add-btn' onClick={()=> addTodoItem()}>Add</button>

      <ul>
        {TodoList.map(todo =>
          <li key={todo.id} className='list-item'>
            <input type="checkbox" checked={todo.completed} onChange={()=> toggleCompleted(todo.id)}/>
            <span className={todo.completed ? 'task-strike': '' }>{todo.text}</span>
            <button className='delete-btn' onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
          </li>
        )}
      </ul>
      

    </div>
  );

}
export default TodoList


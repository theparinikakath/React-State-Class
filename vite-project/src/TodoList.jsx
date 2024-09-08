import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addnewTask=()=>{
        setTodos((prevTodos)=>{
           return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
            });
        setNewTodo("");
    };
    
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };
    
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>prevTodos.filter((todo)=> todo.id!==id));
    };
    
    let upperCaseAll=()=>{
        setTodos((prevtodos)=>(
            prevtodos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            }})
        ));
    }
    
    let upperCaseOne=(id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id===id){
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            }
            else{
                return todo;
            }
        }));
    };
    
    let markOneAsDone=(id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id===id){
                return{
                    ...todo,
                    isDone:true,
                };
            }
            else{
                return todo;
            }
        }));
    };
    
    let markAllAsDone = () => {
        setTodos((prevtodos) => (
            prevtodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        ));
    };
    
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addnewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo)=>{
                        return <li key={todo.id}>
                            <span style={todo.isDone ?{textDecorationLine:"line-through"}:{}}>
                                {todo.task}
                            </span>
                            &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button onClick={()=>upperCaseOne(todo.id)}>Highlight this task</button>
                            <button onClick={()=>markOneAsDone(todo.id)}>Mark as Done</button> {/* New button for marking as done */}
                        </li>
                    })
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>Highlight All</button>
            <button onClick={markAllAsDone}>Mark All as done</button>
        </div>
    )
}

import React from 'react'
import { Todo } from '../model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
interface Props {
    todos:Todo[],
    todo:Todo,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo:React.FC<Props>=({todos,todo,setTodo})=>{
    return(
        <form className='todos_single'>
            <span className='todos-songle--text'>{todo.todo}</span>
            <div>
                <span className="icon"><AiFillEdit/></span>
                <span className="icon"><AiFillDelete/></span>
                <span className="icon"><MdDone/></span>
            </div>
               
                   
               
        </form>
    )
    
}
export default SingleTodo

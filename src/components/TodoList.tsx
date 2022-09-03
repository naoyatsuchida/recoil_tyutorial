import React from 'react';
import {  useRecoilState,useRecoilValue} from "recoil";
import { TodoListState} from "./Atom";
import TodoListStatus from "./TodoListStatus";
import {todoListStatsState} from "./Sele"

interface TodoAtom{
    id:number
    title:string
    isComplete:boolean
}
export const TodoList = () => {

    const todo = useRecoilValue(TodoListState);
    const [todoList,setTodoList] = useRecoilState(TodoListState);
    const totalNum = useRecoilValue(todoListStatsState);
  return (
    <>
     <div style={{width:"60%",margin: "0 auto"}}>

            <TodoListStatus />
            <ul>
                  {todoList.map((todo:TodoAtom) => (
                        <li key={todo.id}>
                              {todo.title}
                        </li>

                ))}

            </ul>

     </div>

    </>
  )
}

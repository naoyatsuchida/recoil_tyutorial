import React from 'react'
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./Sele";

const TodoListStatus = () => {
    const totalNum = useRecoilValue(todoListStatsState);
  return (
       <h1>TodoList:{ totalNum}</h1>
  )
}

export default TodoListStatus

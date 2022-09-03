import { atom } from "recoil";
export const TodoListState = atom({
    key: "todoListState",
    default: [
        {id:0,title:"メール受信",isComplete:false}
    ]
})

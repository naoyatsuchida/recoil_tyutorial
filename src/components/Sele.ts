import {TodoListState} from "./Atom"
import { selector } from "recoil";
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(TodoListState);
    const totalNum = todoList.length;
    return totalNum;
  },
});

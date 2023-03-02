import { defineStore } from 'pinia';
import type { TodoId, TodoItem, TodoList } from '../@types/todo';

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [] as TodoList,
    id: 0 as TodoId,
  }),
  actions: {
    addTodo(item: TodoItem) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
  },
});

export type TodoId = number;

export type TodoItem = string;

export interface TodoListItem {
  completed: boolean;
  id: TodoId;
  item: TodoItem;
}

export type TodoList = TodoListItem[];

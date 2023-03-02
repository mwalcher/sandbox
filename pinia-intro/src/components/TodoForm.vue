<script lang="ts" setup>
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/todoList';
import type { TodoItem } from '@/@types/todo';

const store = useTodoListStore();

const todo = ref('');

function addTodoAndClear(item: TodoItem) {
  if (item.length === 0) {
    return;
  }

  store.addTodo(item);
  todo.value = '';
}
</script>

<template>
  <form @submit.prevent="addTodoAndClear(todo)">
    <input type="text" v-model="todo" />
    <button type="submit">Add</button>
  </form>
</template>

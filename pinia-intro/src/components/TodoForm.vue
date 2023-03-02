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
  <form @submit.prevent="addTodoAndClear(todo)" :class="$style['form']">
    <input type="text" v-model="todo" :class="$style['input']" />
    <button type="submit" :class="$style['button']">Add</button>
  </form>
</template>

<style module>
.form {
  margin-bottom: 15px;
}
.input {
  margin-top: 25px;
  margin-bottom: 15px;
  height: 20px;
  width: 50%;
}
.button {
  margin-left: 30px;
  background-color: #2f6089;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  width: 15%;
}
.alert-div {
  min-height: 25px;
}
.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>

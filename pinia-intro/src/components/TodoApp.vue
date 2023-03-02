<script lang="ts" setup>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
</script>

<template>
  <div :class="$style['todo-app']">
    <h1>To Do List</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<style module>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>

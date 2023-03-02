<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '@/stores/todoList';

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ [$style['completed']]: todo.completed }">{{ todo.item }}</span>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    </div>
  </div>
</template>

<style module>
.completed {
  text-decoration: line-through;
}
</style>

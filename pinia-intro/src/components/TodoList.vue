<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '@/stores/todoList';

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span>{{ todo.item }}</span>
    </div>
  </div>
</template>

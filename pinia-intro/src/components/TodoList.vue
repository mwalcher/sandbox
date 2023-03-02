<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '@/stores/todoList';

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { deleteTodo, toggleCompleted } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" :class="$style['item']">
    <div :class="$style['content']">
      <span :class="{ [$style['completed']]: todo.completed }">{{ todo.item }}</span>
      <div>
        <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
      </div>
    </div>
  </div>
</template>

<style module>
.item {
  display: flex;
  justify-content: center;
}

.item span {
  margin: 0 10px;
  cursor: pointer;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}
</style>

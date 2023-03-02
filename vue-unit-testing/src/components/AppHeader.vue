<script lang="ts" setup>
import { ref } from 'vue';

const loggedIn = ref(false);

defineExpose({
  loggedIn,
});
</script>

<template>
  <div class="app-header">
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<style scoped>
.app-header {
  min-height: 40px;
  padding: 0.2em 1em;
  background: white;
}
button {
  float: right;
}
</style>

<template>
  <div>
    <div class="todo-container" v-for="(item, index) in list" :key="index">
      <div>
        {{ item.name }}
      </div>
      <div>done: {{ !!done }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TodoList",
  setup() {
    const list = ref([
      { name: "Go to gym", done: false },
      { name: "Bring the milk", done: false },
    ]);
    return { list };
  },
};
</script>

<style scoped>
.todo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid salmon;
  padding: 1em;
  border-radius: 5px;
  margin: 10px 0;
  min-width: 400px;
}
</style>

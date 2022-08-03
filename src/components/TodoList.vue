<template>
  <div>
    <div class="todo-container" v-for="(item, index) in list" :key="index">
      <div :class="item.done && 'done'">
        {{ item.name }}
      </div>
      <div>
        <button type="button" @click="complete(item.name)">complete</button>
      </div>
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
    function complete(name) {
      const item = list.value.find((l) => l.name === name);
      item.done = true;
    }
    return { list, complete };
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
.done {
  color: green;
}
</style>

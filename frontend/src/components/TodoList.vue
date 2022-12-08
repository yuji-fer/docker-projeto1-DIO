<template>
  <div id="todoList">
    <table>
      <tr>
        <th>Id</th>
        <th>Description</th>
        <th>Done</th>
      </tr>
      <TodoItem
        v-for="item in store.todoList"
        :key="item.id"
        :item="item"
        @deleteTodo="loadTodoList"
      />
    </table>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { store } from "../js/store";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  data: () => ({
    store,
  }),
  methods: {
    async loadTodoList() {
      await store.loadTodos();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#todoList {
  width: 50%;
  margin: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>

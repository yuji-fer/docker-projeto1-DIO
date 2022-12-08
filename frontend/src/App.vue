<template>
  <h1>Todo APP</h1>
  <TodoAddForm @addTodo="loadTodoList" />
  <TodoList :key="store.todoList.length" />
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoAddForm from "./components/TodoAddForm.vue";
import { store } from "./js/store";

export default {
  name: "App",
  components: {
    TodoAddForm,
    TodoList,
  },
  data: () => ({
    store,
  }),
  methods: {
    async loadTodoList() {
      await store.loadTodos();
    },
  },
  async created() {
    await this.loadTodoList();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 0;
}
</style>

import { reactive } from "vue";
import { getTodos } from "./todoApi";

export const store = reactive({
  todoList: [],
  async loadTodos() {
    this.todoList = await getTodos();
  },
});

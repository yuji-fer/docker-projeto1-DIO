<template v-if="item">
  <tr>
    <td>{{ id }}</td>
    <td>
      <input
        type="text"
        v-model="description"
        @input="handleSaveButtonDisabled"
      />
    </td>
    <td>
      <input
        type="checkbox"
        v-model="done"
        @change="handleSaveButtonDisabled"
      />
    </td>
    <td>
      <button :disabled="saveButtonDisabled" @click="saveTodo">Save</button>
    </td>
    <td>
      <button @click="deleteTodo">Delete</button>
    </td>
  </tr>
</template>

<script>
import { updateTodo, deleteTodo } from "../js/todoApi";

export default {
  name: "TodoItem",
  props: {
    item: Object,
  },
  data: () => ({
    id: 0,
    description: "",
    done: false,
    saveButtonDisabled: true,
  }),
  mounted() {
    this.id = this.item.id;
    this.description = this.item.description;
    this.done = this.item.done;
  },
  methods: {
    handleSaveButtonDisabled() {
      this.saveButtonDisabled =
        this.description === this.item.description &&
        this.done === this.item.done;
    },
    async saveTodo() {
      const result = await updateTodo(this.id, {
        description: this.description,
        done: this.done,
      });
      if (result === null || result.error === undefined) {
        this.saveButtonDisabled = true;
        alert("Todo saved successfully");
      } else alert(result.error);
    },
    async deleteTodo() {
      const result = await deleteTodo(this.id);
      if (result === null || result.error === undefined) {
        this.$emit("deleteTodo");
        alert("Todo deleted successfully");
      } else alert(result.error);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
td {
  border: 1px solid;

  input {
    width: 90%;
  }
}
</style>

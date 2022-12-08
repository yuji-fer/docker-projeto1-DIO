<template>
  <div id="todoAddForm">
    <div class="content">
      <p>Description</p>
      <input type="text" v-model="description" />
    </div>
    <div class="content">
      <p>Done</p>
      <input type="checkbox" v-model="done" />
    </div>
    <button class="content" :disabled="addButtonDisabled" @click="addTodo">
      Add
    </button>
  </div>
</template>

<script>
import { addTodo } from "../js/todoApi";

export default {
  name: "TodoAddForm",
  data: () => ({
    description: "",
    done: false,
    addButtonDisabled: true,
  }),
  watch: {
    description(newValue) {
      this.addButtonDisabled = newValue === "";
    },
  },
  methods: {
    async addTodo() {
      const result = await addTodo({
        description: this.description,
        done: this.done,
      });
      if (result === null || result.error === undefined) {
        this.description = "";
        this.done = false;
        this.$emit("addTodo");
        alert("Todo added successfully");
      } else alert(result.error);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#todoAddForm {
  display: flex;
  align-items: center;
  border: 1px solid;
  width: 50%;
  margin: 1rem;
  justify-content: center;
}

.content {
  margin: 1rem;
}

p {
  margin: 0 0 0.5rem;
}
</style>

const { getNullOrJSON } = require("./utils");

const getTodos = () => {
  return fetch(`${process.env.VUE_APP_URL_BACKEND}`).then((result) =>
    result.json()
  );
};

const updateTodo = (id, todo) => {
  return fetch(`${process.env.VUE_APP_URL_BACKEND}/${id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => getNullOrJSON(result));
};

const addTodo = (todo) => {
  return fetch(`${process.env.VUE_APP_URL_BACKEND}`, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => getNullOrJSON(result));
};

const deleteTodo = (id) => {
  return fetch(`${process.env.VUE_APP_URL_BACKEND}/${id}`, {
    method: "DELETE",
  }).then((result) => getNullOrJSON(result));
};

module.exports = {
  getTodos,
  updateTodo,
  deleteTodo,
  addTodo,
};

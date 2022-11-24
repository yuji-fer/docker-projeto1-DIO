const Todo = require('../Model/todo');

const getAll = async () => {
    const result = await Todo.findAll();
    return result;
};

const getById = async (id) => {
    const result = await Todo.findByPk(id);
    return result;
};

const create = async (todo) => {
    const { description, done } = todo;
    await Todo.create({
        description: description,
        done: done
    });
};

const update = async (id, todoNew) => {
    const { description, done } = todoNew;
    const todo = await Todo.findByPk(id);
    if (!todo)
        return null;

    todo.description = description || todo.description;
    todo.done = done || todo.done;

    const result = await todo.save();
    return result;
};

const remove = async (id) => {
    const result = await Todo.destroy({ where: { id: id }});
    return result;
};

module.exports = {
    getAll, getById, create, update, remove
};
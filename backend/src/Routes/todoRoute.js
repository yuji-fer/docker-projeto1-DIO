const TodoController = require('../Controllers/todoController');
module.exports = (app) => {
   app.post('/todos', TodoController.post);
   app.put('/todos/:id', TodoController.put);
   app.delete('/todos/:id', TodoController.delete);
   app.get('/todos', TodoController.get);
   app.get('/todos/:id', TodoController.getById);
}
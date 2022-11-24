const TodoRepository = require('../Repository/todoRepository');

exports.post = (req, res) => {
    TodoRepository.create(req.body)
        .then(() => res.status(201).end())
        .catch(error => res.status(500).json({ error: error }));
};

exports.put = (req, res) => {
    let id = req.params.id;
    TodoRepository.update(id, req.body)
        .then(result => res.status(result ? 204 : 404).end())
        .catch(error => res.status(500).json({ error: error }));
};

exports.delete = (req, res) => {
    let id = req.params.id;
    TodoRepository.remove(id)
        .then(result => res.status(result ? 204 : 404).end())
        .catch(error => res.status(500).json({ error: error }));
};

exports.get = (req, res) => {
    TodoRepository.getAll()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(500).json({ error: error }));
};

exports.getById = (req, res) => {
    let id = req.params.id;
    TodoRepository.getById(id)
        .then(result => {
            if (result)
                res.status(200).json(result);
            else
                res.status(404).end();
        })
        .catch(error => res.status(500).json({ error: error }));
};
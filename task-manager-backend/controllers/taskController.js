const { Task } = require('../models');

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = await Task.create({ title, description, UserId: req.userId });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao criar tarefa.' });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { UserId: req.userId } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findOne({ where: { id, UserId: req.userId } });

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.completed = completed ?? task.completed;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({ where: { id, UserId: req.userId } });

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    await task.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};

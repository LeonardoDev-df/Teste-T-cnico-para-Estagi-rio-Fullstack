import React, { useState, useEffect } from 'react';
import styles from '../styles/TaskForm.module.css';

const TaskForm = ({ onSubmit, selectedTask, setSelectedTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      onSubmit(selectedTask.id, { title, description, completed: selectedTask.completed });
      setSelectedTask(null);
    } else {
      onSubmit({ title, description });
      // Limpa os campos do formulário após o envio
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
        required
      />
      <button type="submit" className={styles.button}>
        {selectedTask ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
      </button>
    </form>
  );
};

export default TaskForm;

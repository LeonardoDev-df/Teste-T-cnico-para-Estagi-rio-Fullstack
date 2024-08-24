import React, { useState } from 'react';
import styles from '../styles/TaskItem.module.css';

const TaskItem = ({ task, onUpdateTask, onDeleteTask, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateTask({ ...task, title, description });
    setIsEditing(false);
  };

  return (
    <div className={styles.item}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          />
          <button onClick={handleSave} className={styles.button}>Salvar</button>
        </>
      ) : (
        <>
          <h3 className={task.completed ? styles.completed : ''}>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={onToggleComplete.bind(null, task.id)} className={styles.button}>
            {task.completed ? 'Desmarcar' : 'Concluir'}
          </button>
          <button onClick={handleEdit} className={styles.button}>Editar</button>
          <button onClick={onDeleteTask.bind(null, task.id)} className={styles.button}>Excluir</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;

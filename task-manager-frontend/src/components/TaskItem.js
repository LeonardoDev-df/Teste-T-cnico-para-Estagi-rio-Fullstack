// src/components/TaskItem.js
import React from 'react';
import styles from '../styles/TaskItem.module.css';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(task); // Chama a função onToggle
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <h3 className={task.completed ? styles.completed : styles.title}>
          {task.title}
        </h3>
        <p className={styles.description}>{task.description}</p>
      </div>
      <div className={styles.actions}>
        <button className={`${styles.button} ${styles.editButton}`} onClick={() => onEdit(task)}>
          Editar
        </button>
        <button className={`${styles.button} ${styles.deleteButton}`} onClick={() => onDelete(task.id)}>
          Excluir
        </button>
        <button className={`${styles.button} ${styles.toggleButton}`} onClick={handleToggle}>
          {task.completed ? 'Desmarcar' : 'Marcar como concluída'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

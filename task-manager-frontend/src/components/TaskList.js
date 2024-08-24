// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';
import styles from '../styles/TaskList.module.css';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <div className={styles.container}>
      {tasks.length > 0 ? (
        <ul className={styles.taskList}>
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onEdit={onEdit} 
              onDelete={onDelete} 
              onToggle={onToggle}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.noTasks}>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
};

export default TaskList;

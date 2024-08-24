import React from 'react';
import TaskItem from './TaskItem';
import styles from '../styles/TaskList.module.css';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask, onToggleComplete }) => {
  return (
    <div className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;

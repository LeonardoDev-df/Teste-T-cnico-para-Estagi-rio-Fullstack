// src/pages/TaskPage.js
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import styles from '../styles/TaskPage.module.css';

const TaskPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task) => {
    try {
      await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(task)
      });
      fetchTasks(); // Refresh tasks list
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(updatedTask)
      });
      fetchTasks(); // Refresh tasks list
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchTasks(); // Refresh tasks list
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleTaskCompletion = async (task) => {
    const updatedTask = { completed: !task.completed };
    await updateTask(task.id, updatedTask);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Gerenciamento de Tarefas</h1>
      <button onClick={logout} className={styles.logoutButton}>Sair</button>
      <TaskForm
        onSubmit={selectedTask ? updateTask : addTask}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
      <TaskList tasks={tasks} onEdit={setSelectedTask} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
    </div>
  );
};

export default TaskPage;

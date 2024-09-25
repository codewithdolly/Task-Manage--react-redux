import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import TaskDetail from './components/TaskDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const initialTasks = localStorage.getItem('tasks');
    if (initialTasks) {
      setTasks(JSON.parse(initialTasks));
    } else {
      const marketingData = [
        { id: 1, name: "SEO Campaign", dueDate: "2024-10-01", status: "To Do", description: "Optimize website for search engines" },
        { id: 2, name: "Email Marketing", dueDate: "2024-10-02", status: "In Progress", description: "Send newsletter to subscribers" }
      ];
      setTasks(marketingData);
      localStorage.setItem('tasks', JSON.stringify(marketingData));
    }
  }, []);

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  const handleBack = () => {
    setSelectedTask(null);
  };

  return (
    <div className="container mt-5">
      <h1>Task Manager</h1>
      {!selectedTask ? (
        <>
          <NewTask addTask={(newTask) => setTasks([...tasks, newTask])} />
          <TaskList tasks={tasks} onTaskSelect={handleTaskSelect} />
        </>
      ) : (
        <TaskDetail task={selectedTask} onBack={handleBack} />
      )}
    </div>
  );
};

export default App;

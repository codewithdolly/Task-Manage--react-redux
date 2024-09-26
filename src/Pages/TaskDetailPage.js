import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const TaskDetailPage = () => {
  const { id } = useParams(); // Retrieve task id from URL
  const navigate = useNavigate();
  const task = useSelector((state) => state.tasks.tasks.find(task => task.id === parseInt(id))); // Find task by id from Redux store

  if (!task) {
    return <h2 className="text-center mt-5">Task not found</h2>;
  }

  return (
    <div className="container mt-5" style={{width:"40vw"}}>
      <div className="card shadow-sm p-4">
        <p> <strong>Task Name:</strong> {task.name}</p>
        <p><strong>Due Date:</strong> {task.dueDate}</p>
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Description:</strong> {task.description}</p>

        <Button variant="primary" onClick={() => navigate(-1)} style={{ backgroundColor: '#02198B' }}>
          Back to Tasks
        </Button>
      </div>
    </div>
  );
};

export default TaskDetailPage;

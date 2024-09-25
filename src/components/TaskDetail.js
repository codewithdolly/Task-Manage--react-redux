import React from 'react';

const TaskDetail = ({ task, onBack }) => {
  if (!task) return <div>No task selected</div>;

  return (
    <div className="mt-4">
      <h2>Task Details</h2>
      <p><strong>Name:</strong> {task.name}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <button className="btn btn-secondary" onClick={onBack}>Back to Task List</button>
    </div>
  );
};

export default TaskDetail;

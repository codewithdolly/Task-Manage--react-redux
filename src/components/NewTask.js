import React, { useState } from 'react';
import $ from 'jquery';

const NewTask = ({ addTask }) => {
  const [task, setTask] = useState({
    name: '',
    dueDate: '',
    status: 'To Do',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    $.ajax({
      url: '#',  // Simulating task creation
      type: 'POST',
      success: () => {
        const newTask = { ...task, id: Date.now() };
        addTask(newTask);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="mb-3">
        <label className="form-label">Task Name</label>
        <input type="text" className="form-control" value={task.name} onChange={(e) => setTask({ ...task, name: e.target.value })} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input type="date" className="form-control" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default NewTask;

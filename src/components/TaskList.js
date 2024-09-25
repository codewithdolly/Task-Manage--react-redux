import React from 'react';
import $ from 'jquery';

const TaskList = ({ tasks, deleteTask, updateTaskStatus }) => {
  const handleDelete = (id) => {
    $.ajax({
      url: '#',  // Since we're using localStorage, this simulates delete functionality
      type: 'DELETE',
      success: () => deleteTask(id)
    });
  };

  const handleStatusChange = (id, status) => {
    $.ajax({
      url: '#',  // Simulate an update operation
      type: 'PUT',
      success: () => updateTaskStatus(id, status)
    });
  };

  return (
    <div>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{task.name}</strong> <br />
              Due: {task.dueDate} | Status: {task.status}
            </div>
            <div>
              <button className="btn btn-sm btn-success me-2" onClick={() => handleStatusChange(task.id, 'Done')}>Mark as Done</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

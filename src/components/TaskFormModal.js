import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/tasksSlice';
import { Modal, Button } from 'react-bootstrap';

const TaskFormModal = ({ show, handleClose, taskToEdit }) => {
  const dispatch = useDispatch();
  
  // State for the task being created or edited
  const [task, setTask] = useState({ name: '', dueDate: '', status: 'To Do', description: '' });

  // Effect to populate the form when editing
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if we are editing or adding a new task
    if (taskToEdit) {
      dispatch(editTask(task));  // Dispatch edit task
    } else {
      dispatch(addTask({ ...task, id: Date.now() })); // Dispatch add task with a unique ID
    }
    
    handleClose(); // Close modal after submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add New Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Task Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={task.name} 
              onChange={(e) => setTask({ ...task, name: e.target.value })} 
              required 
            />
          </div>
          <div className="form-group mb-3">
            <label>Due Date</label>
            <input 
              type="date" 
              className="form-control" 
              value={task.dueDate} 
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })} 
              required 
            />
          </div>
          <div className="form-group mb-3">
            <label>Status</label>
            <select 
              className="form-control" 
              value={task.status} 
              onChange={(e) => setTask({ ...task, status: e.target.value })}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Description</label>
            <textarea 
              className="form-control" 
              value={task.description} 
              onChange={(e) => setTask({ ...task, description: e.target.value })} 
              required 
            />
          </div>
          <Button type="submit" className="btn btn-primary" style={{ backgroundColor: '#02198B' }}>
            {taskToEdit ? 'Update Task' : 'Create Task'}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskFormModal;

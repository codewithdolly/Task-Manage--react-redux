import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/tasksSlice'; // Ensure only editTask is imported
import { Modal, Button } from 'react-bootstrap';

const TaskFormModal = ({ show, handleClose, taskToEdit }) => {
  const [task, setTask] = useState({ name: '', dueDate: '', status: 'To Do', description: '' });
  const dispatch = useDispatch();

  // Use useEffect to set the task when taskToEdit changes
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch editTask with the updated task
    dispatch(editTask(task));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title> {/* Changed title to only "Edit Task" */}
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
            Update Task {/* Changed button text to 'Update Task' */}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskFormModal;

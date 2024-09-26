import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import TaskFormModal from "./TaskFormModal";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setTaskToEdit(null);
  };

  const handleAddNewTask = () => {
    setTaskToEdit(null); // Reset for adding a new task
    setShowModal(true); // Show the modal for the new task form
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mx-2">
      <h2 className="text-center mb-4" style={{ color: "#02198B" }}>
        Task List
      </h2>
      <button
        className="btn btn-primary mb-4"
        onClick={handleAddNewTask}
        style={{ backgroundColor: "#02198B" }}
      >
        Add New Task
      </button>
      </div>
      
      {/* Table for task list */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead style={{ backgroundColor: "#f8f9fa" }}>
            <tr>
              <th scope="col">Task Name</th>
              <th scope="col">Due Date</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <Link
                    to={`/task/${task.id}`}
                    style={{ color: "#02198B", textDecoration: "none" }}
                  >
                    {task.name}
                  </Link>
                </td>
                <td>{task.dueDate}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>
                  <button
                    className="btn btn-warning mr-2 mx-2"
                    onClick={() => handleEdit(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TaskFormModal
        show={showModal}
        handleClose={handleModalClose}
        taskToEdit={taskToEdit}
      />
    </div>
  );
};

export default TaskList;

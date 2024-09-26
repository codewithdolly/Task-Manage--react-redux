import React from 'react';
import { useDrop } from 'react-dnd';
import TaskList from '../components/TaskList';
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../redux/tasksSlice';

const TaskStatusColumn = ({ status }) => {
  const dispatch = useDispatch();
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => dispatch(updateTaskStatus({ id: item.id, status })),
  });

  return (
    <div ref={drop} className="col-md-12 mb-4 p-4 bg-light shadow-sm rounded">
      <h5>{status}</h5>
      <TaskList status={status} />
    </div>
  );
};

export default TaskStatusColumn;

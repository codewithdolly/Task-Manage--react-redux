import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskStatusColumn from '../dnd/TaskStatusColumn';

const Home = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mt-5">
        <div className="row">
          <TaskStatusColumn />
          {/* <TaskStatusColumn status="In Progress" />
          <TaskStatusColumn status="Done" /> */}
        </div>
      </div>
    </DndProvider>
  );
};

export default Home;

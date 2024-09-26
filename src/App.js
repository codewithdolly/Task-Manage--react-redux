import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'; // Import the store
import Home from './Pages/Home';
import TaskDetailPage from './Pages/TaskDetailPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Main Task Board with drag-and-drop functionality */}
          <Route path="/" element={<Home />} />
          
          {/* Task Detail Page */}
          <Route path="/task/:id" element={<TaskDetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OperationForm from './components/OperationForm';
import Result from './components/Result';



const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Sidebar />
        <div style={styles.contentContainer}>
          <Routes>
            {/* TODO 1: Add a new route to open the operation form */}
            <Route path="/:operation" element={<OperationForm />} />
            {/* TODO 2: Add a new route that opens the Result page */}
            <Route  path="/:operation/:num1/:num2" element={<Result />} />
            {/* TODO BONUS 1: Add a new route to  make the homepage default to navigating to the addition operation form  */}
            <Route path="/" element={<Navigate to="/addition" />} />
            {/* TODO BONUS 2: Add a custom Page Not Found error */}
            <Route path='*' element={<p><strong>404: Page Not Found</strong></p>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
  },
  contentContainer: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#eef2f5',
    minHeight: '100vh',
  },
};

export default App;

import React from 'react';
import './App.css';
import HomePage from './pages/homePage';
import UserPage from './pages/userPage';
import { BrowserRouter } from "react-router-dom";
import Router from './routers/router';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Router>
              <HomePage/>
              <UserPage/>  
          </Router>
        </BrowserRouter>
    </div>
  );
}

export default App;

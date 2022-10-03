import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/homePage';
import UserPage from './pages/userPage';
import { BrowserRouter } from "react-router-dom";
import Router from './routers/router';
function App() {

  const [token, setToken] = useState();

  // useEffect(() => {
  //     const userToken = window.localStorage.getItem('userToken')
  //     if (userToken) {
  //         const token = JSON.parse(userToken)
  //         setToken(token)
  //         console.log(token)
  //     }
  // }, [])

  return (
    <div className="App">
        {/* {token === null
          ? <HomePage token={token} setToken={setToken}/>
          : <UserPage token={token} setToken={setToken}/> 
        } */}
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

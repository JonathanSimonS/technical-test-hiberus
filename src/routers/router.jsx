import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';
import ErrorComponent from '../pages/errorPage';

const Router = () => {
    
    // use user data for route protection
    const userLogged = window.localStorage.getItem("loggedUser");
    
    return (
        <div>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        userLogged
                            ? <Navigate replace to="user"/>
                            : <HomePage/>
                    }
                />
                <Route
                    path="user"
                    element={
                        userLogged
                            ? <UserPage/>
                            : <Navigate replace to="/"/>
                    }
                />
                <Route 
                    path="*" 
                    element={<ErrorComponent />} />
            </Routes>

        </div>
    );
}

export default Router;

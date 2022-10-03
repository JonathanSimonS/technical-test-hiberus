import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';
import ErrorComponent from '../pages/errorPage';

const Router = () => {
    
    // const userActive = false;
    
    return (
        <div>
            <Routes>
                <Route
                    exact
                    path="/"
                
                    element={
                        <HomePage/>
                        // userActive
                        // ? <Navigate replace to="user"/>
                        // : <HomePage/>
                    }
                />
                <Route
                    path="user"
                    element={
                        <UserPage/>
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

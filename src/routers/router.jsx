import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';

const Router = () => {
    
    const userActive = false;
    
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        userActive
                        ? <Navigate replace to="user"/>
                        : <HomePage/>
                    }
                />
                <Route
                    path="user"
                    element={
                        <UserPage/>
                    }
                />
            </Routes>
        </div>
    );
}

export default Router;

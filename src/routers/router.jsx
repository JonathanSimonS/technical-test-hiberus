import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage/>
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

import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';
import ErrorComponent from '../pages/errorPage';
import { useSelector } from 'react-redux';

const Router = () => {

    // use only id for conditional render
    const loggedUserId = useSelector((state) => state.loggedUser.id) // value in store

    return (
        <div>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        loggedUserId !== ''
                            ? <Navigate replace to="user"/>
                            : <HomePage/>
                    }
                />
                <Route
                    path="user"
                    element={
                        loggedUserId !== ''
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

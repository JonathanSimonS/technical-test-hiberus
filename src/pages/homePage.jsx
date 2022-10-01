import React from 'react';
import Header from '../components/pure/header'
import LoginComponent from '../components/container/loginComponent';
import RegisterComponent from '../components/container/registerComponent';
import Footer from '../components/pure/footer'
import './homePage.css'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Header></Header>

                <Link to="/user" className="nav-link align-middle px-0">
                    <i className="fs-1 bi-house-fill"></i>{" "}
                    <span
                        className="fs-4 ms-1 d-none d-lg-inline"
                        style={{ color: "black" }}
                    >
                        Inicio
                    </span>
                </Link>

            <div className="row m-0 home-section">
                <div className="image-container col-8"></div>
                <div className="row m-0 col-4">
                    <div className="col-12">
                        <RegisterComponent/>
                    </div>
                    <div className="col-12">
                        <LoginComponent/>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default HomePage;

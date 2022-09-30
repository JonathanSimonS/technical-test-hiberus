import React from 'react';
import Header from '../components/pure/header'
import Footer from '../components/pure/footer'
import './homePage.css'
const HomePage = () => {
    return (
        <div>
            <Header></Header>

            <div className="row m-0 home-section">
                <div className="image-container col-8"></div>
                <div className="row m-0 col-4">
                    <div className="col-12">
                        <button>Registro</button>
                    </div>
                    <div className="col-12">
                        <button>Login</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default HomePage;

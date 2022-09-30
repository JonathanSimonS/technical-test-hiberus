import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-container text-center text-white text-muted pt-3" style={{backgroundColor:'#282c34'}}>

            <section >
                <div className="container text-center ">
                    <div className="row m-0">
                        <div className="col-md-6 col-xl-3 mx-auto ">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Hiberus
                            </h6>
                            <p>Technical test created by Jonathan Simón for Hiberus Frontend</p>
                        </div>

                        <div className="col-md-6 col-xl-3 mx-auto">
                            <h6 className="text-uppercase fw-bold mb-2">Contact</h6>

                            <a target="blank" href="https://wa.me/34652498543?text=Hola,%20soy%20Jonathan,%20desarrollador%20web%20junior,%20escríbeme." className="me-3 text-reset">
                                <i className='bi-whatsapp' style={ {fontSize: "2em"}}></i>
                            </a>
                            <a href="mailto:yonidefines@hotmail.com?Subject=Contacto%20via%20web" className="me-3 text-reset">
                                <i className='bi-envelope' style={ {fontSize: "2em"}}></i>                            
                            </a>
                            <a target="blank" href="https://github.com/JonathanSimonS" className="me-3 text-reset">
                                <i className='bi-github' style={ {fontSize: "2em"}}></i>
                            </a>
                            <a target="blank" href="https://www.linkedin.com/in/jonathansimonsa/" className="me-3 text-reset">
                                <i className='bi-linkedin' style={ {fontSize: "2em"}}></i>                            
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-1 fw-bold" > 
                <p className="text-reset fw-bold"> 2022 Copyright © Jonatan Simón Sánchez</p>
            </div>
        </footer>

    );
}

export default Footer;

import React from 'react'
import img1 from '../img/img1.jpg'
import '../css/HomePages.css'
import logo from '../img/logo.png'
import empanadas from '../img/empanadas.jpg'
import humita from '../img/humita.jpg'
import tamales from '../img/tamales.jpg'
import asado from '../img/asado.jpg'
import sandwich from '../img/sandwich.jpg'
import napo from '../img/napo.jpg'
import cafe from '../img/cafe.jpeg'
import cafeconleche from '../img/cafeconleche.jpg'
import cortadito from '../img/cortadito.jpg'
import cerveza from '../img/cerveza.jpg'
import gaseosas from '../img/gaseosas.jpg'
import aguas from '../img/aguasaborizada.jpg'


function HomePages() {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                {/* Autor: Andres Perlo - CEl 3814443123 */}
                <div className='div-gulf'>
                    <h1>Gulf Tucuman</h1>
                    <h3>Restobar & Drugstore</h3>
                    <h5>Comidas, Bebidas y Golosinas</h5>
                </div>
                <img src={img1} className='img-gulf' alt="" />
            </div>
            <div className='pt-5 pb-3 text-center'>
                <h3>Nuestro Menu</h3>
            </div>
            <div className="container">
                <h2 className='pb-3 h2-css'>Cafeteria</h2>
                <div className="card-columns">
                    <div class="card">
                        <img src={cafe} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Cafe Negro</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={cafeconleche} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Cafe Con Leche</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={cortadito} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Cortadito</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-3">
                <h2 className='py-3 h2-css'>Cocina</h2>
                <div className="card-columns">
                    <div>
                        <div class="card">
                            <img src={empanadas} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Empanadas Tucumanas</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={asado} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Asado Tradicional</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={humita} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Humita al Plato</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={sandwich} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Sandwich</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={tamales} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tamales Tucumanos</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={napo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Napolitana Para Dos</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-3">
                <h2 className='pb-3 h2-css'>Bebidas</h2>
                <div className="card-columns">
                    <div>
                        <div class="card">
                            <img src={cerveza} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Bebidas con Alcohol</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={gaseosas} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Bebidas Sin Alcohol</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={aguas} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Agua Saborizada</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer className='py-3 bg-dark text-white footer-css'>
                    <div className='ml5-css'>
                        <img src={logo} className='img-logo' alt="" />
                    </div>
                    <div className='text-center'>
                        <h2>Hacer Pedidos:<br /> <i class="fas fa-phone-volume py-3"></i> 381 603 6303</h2>
                        <h4><i class="fas fa-map-marker-alt"></i> Av. Siria 1968</h4>
                    </div>
                    <div className='mr5-css text-center'>
                        <h4 className='pb-3'>Haz cick para ver como llegar</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292.7244576122078!2d-65.20442587848555!3d-26.803253375792462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c324224fc93%3A0xcfd53fbd8b316e29!2sLa%20Diagonal%20GNC!5e0!3m2!1ses!2sar!4v1600694297513!5m2!1ses!2sar" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HomePages;

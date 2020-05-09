import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-5 pr-5 sticky-top">
                    <a className="navbar-brand mr-5" href="index.html"><img src="/assets/images/logo.jpg" width="100" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active mr-4">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown mr-4">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="subnavContent">
                                        <ul className="subnavlinks mt-4">
                                            <li className="float-left">
                                                <p>Chips & Crackers</p>
                                                <ul className="pl-0">
                                                    <li className="mb-3"><a href="laiki.html">Laiki Rice Crackers</a></li>
                                                </ul>
                                            </li>
                                            <li className="float-left">
                                                <p>Gluten Free Snacks</p>
                                                <ul className="pl-0">
                                                    <li className="mb-3"><a href="inka.html">Inka Plantain Chips</a></li>
                                                </ul>
                                            </li>
                                            <li className="float-left">
                                                <p>Snacks for Kids</p>
                                                <ul className="pl-0">
                                                    <li className="mb-3"><a href="annies.html">Annie's Organic Bunny Fruit Snacks</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="aboutus.html">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contactus.html">Contact Us</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                            <button className="btn btn-primary my-2 my-sm-0 ml-2" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="content">
                    <div className="row row-content pt-0">
                        <div className="col">
                            <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-12 col-sm-5 mt-5 offset-1"><img src="/assets/images/laiki.png"
                                                alt="Laiki Rice Crackers" /></div>
                                            <div className="col-12 col-sm-5 mt-5 ml-5 pt-5">
                                                <h2 className="font-weight-bold red">Laiki Rice Crackers</h2>
                                                <p className="fs-18 mr-5">Laiki Rice rackers are rich in flavor and made to crunchy
                                        perfection. Made from three simple, natural ingredients: rice, oil & salt.</p>
                                                <a className="btn btn-danger"
                                                    href="https://www.laikicrackers.com/product/laiki-rice-crackers-4-flavor-variety-bundle-3-53-ounces-pack-of-4/"
                                                    target="_blank" role="button">Buy Now</a>
                                                <a className="btn btn-primary ml-3" href="laiki.html" role="button">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center text-white small">
                                ©2020 Healthy Snacks. All Rights Reserved.
                </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Home;
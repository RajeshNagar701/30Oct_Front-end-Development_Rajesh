import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, Link } from 'react-router-dom'


function Header1() {
    return (
        <div>
            <Helmet>
                <script src="website/assets/js/jquery-3.3.1.min.js"></script>
                <script src="website/assets/js/owl-carousel.js"></script>
                <script src="website/assets/js/theme-change.js"></script>
                <script src="website/assets/js/jquery.magnific-popup.min.js"></script>
                <script src="website/assets/js/bootstrap.min.js"></script>
            </Helmet>
            {/*header*/}
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke">
                        <h1>
                            <Link className="navbar-brand" to="/">Beauty Skin</Link>
                        </h1>
                        {/* if logo is image enable this
    <a class="navbar-brand" href="#index.html">
  <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
    </a> */}
                        <div className="navbar ml-lg-auto">
                            {/* menu */}
                            <ul id="menu">
                                <li>
                                    <input id="check02" type="checkbox" name="menu" />
                                    <label htmlFor="check02"><span className="fa fa-bars" aria-hidden="true" /></label>
                                    <ul className="submenu">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About Us</NavLink></li>
                                        <li><NavLink to="/services">Services</NavLink></li>
                                        <li><NavLink to="/contact" >Contact Us</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* //menu */}
                            {/* search button */}
                            <div className="search-right">
                                <a href="#search" className="btn" title="search"><span className="fa fa-search" aria-hidden="true" /></a>
                                {/* search popup */}
                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <h4 className="search-pop-text-w3 text-white text-center mb-4">Search Now</h4>
                                        <form action="#search" method="GET" className="search-box">
                                            <div className="input-search"> <span className="fa fa-search mr-2" aria-hidden="true" /><input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus className="search-popup" />
                                            </div>
                                            <button type="submit" className="btn btn-style search-btn">Search</button>
                                        </form>
                                    </div>
                                    <a className="close" href="#close">×</a>
                                </div>
                                {/* //search popup */}
                            </div>
                            {/* //search button */}
                            {/* toggle switch for light and dark theme */}
                            <div className="cont-ser-position mr-5">
                                <nav className="navigation">
                                    <div className="theme-switch-wrapper">
                                        <label className="theme-switch" htmlFor="checkbox">
                                            <input type="checkbox" id="checkbox" />
                                            <div className="mode-container">
                                                <i className="gg-sun" />
                                                <i className="gg-moon" />
                                            </div>
                                        </label>
                                    </div>
                                </nav>
                            </div>

                            {/* //toggle switch for light and dark theme */}
                        </div>
                    </nav>
                </div>
            </header>
            {/*//header*/}
            {/* banner section */}
            <section className="w3l-banner d-flex align-items-center" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-7 col-sm-8 banner-content">
                            <h6 className="banner-style-top font-weight-bold text-uppercase mb-2 pb-1">Welcome to</h6>
                            <h3 className="banner-style font-weight-bold ">Beauty <span className="banner-text-color">Skin</span></h3>
                            <p className="mt-4 pt-2 pr-sm-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
                            <div className="d-flex align-items-center buttons-banner mt-5">
                                <Link to="/about" className="btn btn-style">Reserve Now</Link>
                                <a className="btn btn-style-primary popup-with-zoom-anim ml-3" href="#small-dialog"><i className="fa fa-play-circle" aria-hidden="true" /> Play Video
                                </a>
                            </div>
                            {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                            <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
                                <iframe src="https://player.vimeo.com/video/30187489" frameborder="0"
                                    allow="autoplay; fullscreen" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //banner section */}
        </div>

    )
}

export default Header1
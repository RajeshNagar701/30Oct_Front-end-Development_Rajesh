import React from 'react'
import { Helmet } from 'react-helmet'

function Footer() {
    return (

        <div>
            
            <section className="w3l-copyright py-5">
                <div className="container">
                    <div className="row bottom-copies align-items-center">
                        <div className="col-lg-4 text-lg-left text-center mb-lg-0 mb-3">
                            <div className="main-social-footer-29">
                                <a href="#facebook" className="facebook"><span className="fa fa-facebook" /></a>
                                <a href="#twitter" className="twitter"><span className="fa fa-twitter" /></a>
                                <a href="#google"><span className="fa fa-google-plus" aria-hidden="true" /></a>
                                <a href="#instagram" className="instagram"><span className="fa fa-instagram" /></a>
                                <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 logo-grid text-center">
                            <a className="logo-2" href="index.html">Beauty Skin</a>
                        </div>
                        <p className="col-lg-4 copy-footer-29 mt-lg-0 mt-3">© 2021 Beauty Skin. All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank">
                            W3Layouts</a></p>
                    </div>
                </div>
            </section>
            {/* //copyright */}
            {/* Js scripts */}
            {/* move top */}
            <button onclick="topFunction()" id="movetop" title="Go to top">
                <span class="fa fa-level-up" aria-hidden="true"></span>
            </button>

        </div>

    )
}

export default Footer
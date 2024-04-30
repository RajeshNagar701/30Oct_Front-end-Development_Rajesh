import React from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'

function Dashboard() {
    return (
        <div>
            <AHeader title="Contact us"/>
            <div className="contact-form py-5 mb-5">
                <div className="container py-lg-5 py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-sm-5 mb-4">
                                <h3 className="title-style mb-5">Welcome Admin Dashboard</h3>
                                <p className="lead">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <section className="w3l-bottom-grids-6 w3l-services pt-5" id="services">
                <div className="container pt-md-5 pt-4">
                    <div className="grids-area-hny main-cont-wthree-fea row">
                        <div className="col-lg-4 col-md-6 grids-feature">
                            <div className="area-box">
                                <i className="fa fa-xing" aria-hidden="true" />
                                <h4><a href="#feature" className="title-head">Customer</a></h4>
                                <p className>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                    sed et dolor amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                            <div className="area-box">
                                <i className="fa fa-lock" aria-hidden="true" />
                                <h4><a href="#feature" className="title-head">Categories</a></h4>
                                <p className>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                    sed dolor et amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                            <div className="area-box">
                                <i className="fa fa-cloud" aria-hidden="true" />
                                <h4><a href="#feature" className="title-head">Services</a></h4>
                                <p className>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                    sed dolor et amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    <div className="mx-auto" style={{ maxWidth: 1100 }}>
                        <div className="row mt-5 mb-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-address p-4">
                                    <div className="contact-icon d-flex align-items-center">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <div className="ml-3">
                                            <h5 className="contact-text">Welcome Admin Panel</h5>
                                            <p>5th Avenue, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                                <div className="contact-address p-4">
                                    <div className="contact-icon d-flex align-items-center">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <div className="ml-3">
                                            <h5 className="contact-text">Call Us:</h5>
                                            <a href="tel:+12 23456790">+12 23456790</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                                <div className="contact-address p-4">
                                    <div className="contact-icon d-flex align-items-center">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <div className="ml-3">
                                            <h5 className="contact-text">Mail Us:</h5>
                                            <a href="mailto:info@example.com"> info@example.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
         
            <AFooter/>
        </div>
    )
}

export default Dashboard
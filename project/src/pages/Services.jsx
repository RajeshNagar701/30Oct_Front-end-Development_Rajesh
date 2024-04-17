import React from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'

function Services() {
    return (
        <div>
            <Header2 title="Services"/>
            {/* banner bottom section */}
            <section className="w3l-bottom-grids-6 w3l-services pt-5" id="services">
                <div className="container pt-md-5 pt-4">
                    <div className="grids-area-hny main-cont-wthree-fea row">
                        <div className="col-lg-4 col-md-6 grids-feature">
                            <div className="area-box">
                                <i className="fa fa-xing" aria-hidden="true" />
                                <h4><a href="#feature" className="title-head">Creative Design</a></h4>
                                <p className>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                    sed et dolor amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                            <div className="area-box">
                                <i className="fa fa-lock" aria-hidden="true" />
                                <h4><a href="#feature" className="title-head">Cyber Security</a></h4>
                                <p className>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                    sed dolor et amet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                            <div className="area-box">
                                <i className="fa fa-cloud" aria-hidden="true" />
                                <h4><a href="#feature" className="title-head">Cloud Services</a></h4>
                                <p className>Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis
                                    sed dolor et amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //banner bottom section */}
            {/* service section 1 */}
            <section className="w3l-service-1 py-5">
                <div className="container py-md-5 py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-sm-5 mb-4">
                                <h3 className="title-style mb-2">Our Best Services</h3>
                                <p className="lead">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid content23-col-2 text-center">
                        <div className="content23-grid content23-grid1">
                        </div>
                        <div className="content23-grid content23-grid2">
                        </div>
                        <div className="content23-grid content23-grid3">
                        </div>
                        <div className="content23-grid content23-grid4">
                        </div>
                    </div>
                </div>
            </section>
            {/* //service section 1 */}
            {/* service section 2 */}
            <section className="w3l-service-2 pb-5">
                <div className="container pb-md-5 pb-4">
                    <div className="wrapper-max">
                        <h3 className="features14-headtext">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                            excepturi sint</h3>
                        <div className="features14-grids mt-5">
                            <div className="features14-grid">
                                <span className="fa fa-handshake-o" aria-hidden="true" />
                                <h5><a href="#services">Service one</a></h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veniam vel amet, dignissimos
                                    minima nihil.</p>
                            </div>
                            <div className="features14-grid">
                                <span className="fa fa-bar-chart" aria-hidden="true" />
                                <h5><a href="#services">Service two</a></h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veniam vel amet, dignissimos
                                    minima nihil.</p>
                            </div>
                            <div className="features14-grid">
                                <span className="fa fa-clock-o" aria-hidden="true" />
                                <h5><a href="#services">Service three</a></h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veniam vel amet, dignissimos
                                    minima nihil.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service section 2 */}
            <Footer/>
        </div>

    )
}

export default Services
import React from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'

function About() {
    return (
        <div>
            <Header2 title="About us"/>
            <section className="w3l-block-sec py-5">
                <div className="container py-md-5 py-4">
                    <div className="row left-block-sec align-items-center">
                        <div className="col-md-4 text-center">
                            <img className="img-fluid" src="website/assets/images/about1.jpg" alt=" " />
                        </div>
                        <div className="col-md-8 right-block-bg pl-md-5 mt-md-0 mt-5">
                            <div className="row">
                                <div className="col-sm-6">
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                    <h6>eiusmod tempor</h6>
                                    <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
                                </div>
                                <div className="col-sm-6 mt-sm-0 mt-5">
                                    <i className="fa fa-circle-o-notch" aria-hidden="true" />
                                    <h6>incididunt ut</h6>
                                    <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <i className="fa fa-eye" aria-hidden="true" />
                                    <h6>abore etdol</h6>
                                    <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
                                </div>
                                <div className="col-sm-6 mt-5">
                                    <i className="fa fa-paint-brush" aria-hidden="true" />
                                    <h6>magna aliqua</h6>
                                    <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //block icons section */}
            {/* middle */}
            <div className="middle-inner py-5">
                <div className="container py-md-5 py-4">
                    <div className="about-left text-center py-lg-4">
                        <h3 className="title-big">
                            We are full service Beauty &amp; Skin center</h3>
                        <p>We focus on the needs sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="#started" className="btn btn-style btn-white mt-sm-5 mt-4 mr-2">Get started</a>
                        <a href="contact.html" className="btn btn-style btn-primary mt-sm-5 mt-4">Contact Us</a>
                    </div>
                </div>
            </div>
            {/* //middle */}
            {/* team section */}
            <section className="w3l-team py-5">
                <div className="container py-md-5 py-4">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8">
                            <div className="section-heading mb-sm-5 mb-4">
                                <h3 className="title-style mb-2">Our Team</h3>
                                <p className="lead">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-block-single">
                                <div className="team-grids">
                                    <a href="#team-single">
                                        <img src="website/assets/images/team1.jpg" className="img-fluid" alt />
                                    </a><div className="team-info"><a href="#team-single">
                                    </a><div className="social-icons-section"><a href="#team-single">
                                    </a><a className="fac" href="#facebook">
                                                <span className="fa fa-facebook" />
                                            </a>
                                            <a className="twitter mx-2" href="#twitter">
                                                <span className="fa fa-twitter" />
                                            </a>
                                            <a className="google" href="#google-plus">
                                                <span className="fa fa-google-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bottom-block p-4">
                                    <h5 className="member mb-1"><a href="#team">Olive Yew</a></h5>
                                    <p>Caption Here</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-sm-0 mt-4">
                            <div className="team-block-single">
                                <div className="team-grids">
                                    <a href="#team-single">
                                        <img src="website/assets/images/team2.jpg" className="img-fluid" alt />
                                    </a><div className="team-info"><a href="#team-single">
                                    </a><div className="social-icons-section"><a href="#team-single">
                                    </a><a className="fac" href="#facebook">
                                                <span className="fa fa-facebook" />
                                            </a>
                                            <a className="twitter mx-2" href="#twitter">
                                                <span className="fa fa-twitter" />
                                            </a>
                                            <a className="google" href="#google-plus">
                                                <span className="fa fa-google-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bottom-block p-4">
                                    <h5 className="member mb-1 active"><a href="#team">Aida Joe</a></h5>
                                    <p>Caption Here</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt-lg-0 mt-4">
                            <div className="team-block-single">
                                <div className="team-grids">
                                    <a href="#team-single">
                                        <img src="website/assets/images/team3.jpg" className="img-fluid" alt />
                                    </a><div className="team-info"><a href="#team-single">
                                    </a><div className="social-icons-section"><a href="#team-single">
                                    </a><a className="fac" href="#facebook">
                                                <span className="fa fa-facebook" />
                                            </a>
                                            <a className="twitter mx-2" href="#twitter">
                                                <span className="fa fa-twitter" />
                                            </a>
                                            <a className="google" href="#google-plus">
                                                <span className="fa fa-google-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-bottom-block p-4">
                                    <h5 className="member mb-1"><a href="#team">Teri Dac</a></h5>
                                    <p>Caption Here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //team setion */}
            {/* 3 grids with icon section */}
            <section className="w3l-feature-8">
                <div className="features-main py-5">
                    <div className="container py-md-5 py-4">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 feature-body">
                                <div className="feature-icon">
                                    <span className="fa fa-paint-brush" aria-hidden="true" />
                                </div>
                                <div className="feature-info">
                                    <a href="about.html">
                                        <h3 className="feature-titel mb-3">Cosmetic Procedures</h3>
                                    </a>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                                    </p>
                                    <a href="about.html" className="feature-link">Read more <span className="arrow">»</span></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 feature-body mt-sm-0 mt-5">
                                <div className="feature-icon">
                                    <span className="fa fa-angellist" aria-hidden="true" />
                                </div>
                                <div className="feature-info">
                                    <a href="about.html">
                                        <h3 className="feature-titel mb-3">Amazing Products</h3>
                                    </a>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                                    </p>
                                    <a href="about.html" className="feature-link">Read more <span className="arrow">»</span></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 feature-body mt-lg-0 mt-5">
                                <div className="feature-icon">
                                    <span className="fa fa-leaf" aria-hidden="true" />
                                </div>
                                <div className="feature-info">
                                    <a href="about.html">
                                        <h3 className="feature-titel mb-3">Paired Procedures</h3>
                                    </a>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit accus antium dolor emque lauda ntium.
                                    </p>
                                    <a href="about.html" className="feature-link">Read more <span className="arrow">»</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //3 grids with icon section */}
            {/* skills section */}
            <section className="w3l-skills" id="skills">
                <div className="midd-w3 py-5">
                    <div className="container py-md-5 py-4">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h3 className="title-big mx-0">Story About Us</h3>
                                <p className="mt-md-4 mt-3">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                    excepturi sint occaecati cup.</p>
                                <a href="#blog" className="btn btn-style mt-sm-5 mt-4">Learn More</a>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5">
                                <div className="skills-bars">
                                    <div className="progress-info">
                                        <h6 className="progress-tittle">Sique Sunt</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info">
                                        <h6 className="progress-tittle">In Culpa
                                        </h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info">
                                        <h6 className="progress-tittle">Officia Dese</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info">
                                        <h6 className="progress-tittle">Mollitia Ani</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '68%' }} aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //skills section */}
            <Footer/>
        </div>

    )
}

export default About
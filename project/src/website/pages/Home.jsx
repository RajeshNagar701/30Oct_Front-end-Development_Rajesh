import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header1/>
            {/* middle */}
            <div className="middle py-5">
                <div className="container pb-md-5 pb-4">
                    <div className="welcome-left text-center m-auto" style={{ maxWidth: 800 }}>
                        <p className="text-sub mb-2 text-uppercase">Ut enim ad minim veniam, quis nostrud</p>
                        <h3 className="title-big mb-4">We have the best Services</h3>
                        <p className>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.</p>
                        <a href="services.html" className="btn btn-style mt-sm-5 mt-4">Let's get started !</a>
                    </div>
                </div>
            </div>
            {/* //middle */}
            {/* brands section */}
            <section className="companies-20 py-4">
                <div className="companies20-content">
                    <div className="companies-wrapper">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img1.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img2.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img4.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img6.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img3.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img5.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img1.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img6.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img3.jpg" alt /></a>
                            </div>
                            <div className="item">
                                <a href="#link"><img src="website/assets/images/img4.jpg" alt /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //brands section */}
            {/* what we do section */}
            <div className="w3l-grids-block-5 py-5">
                <div className="container py-md-5 py-4">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-8">
                            <div className="section-heading mb-sm-5 mb-4">
                                <h3 className="title-style mb-2">What We Do</h3>
                                <p className="lead">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card-single">
                                <div className="grids5-info">
                                    <a href="#blog"><img src="website/assets/images/f1.jpg" alt /></a>
                                    <div className="blog-info">
                                        <h4><a href="#blog">Feature - 1</a></h4>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a className="btn btn-style" href="about.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                            <div className="blog-card-single">
                                <div className="grids5-info">
                                    <a href="#blog"><img src="website/assets/images/f2.jpg" alt /></a>
                                    <div className="blog-info">
                                        <h4><a href="#blog">Feature - 2</a></h4>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a className="btn btn-style" href="about.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                            <div className="blog-card-single">
                                <div className="grids5-info">
                                    <a href="#blog"><img src="website/assets/images/f3.jpg" alt /></a>
                                    <div className="blog-info">
                                        <h4><a href="#blog">Feature - 3</a></h4>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a className="btn btn-style" href="about.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* //what we do section */}
            {/* clients section */}
            <div className="w3l-cutomer-main-cont">
                <div className="testimonials pb-5">
                    <div className="container py-md-5 py-4">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-sm-5 mb-4">
                                    <h3 className="title-style mb-2 text-white">Customer Says</h3>
                                    <p className="sub-para mx-auto text-white" style={{ maxWidth: 500 }}>
                                        Mde ut perspiciatis unde omnis iste natus error sit oluptatem accusantium
                                        doloremque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row content-sec">
                            <div className="col-lg-4 col-md-6 testi-sections">
                                <div className="testimonials_grid">
                                    <p className="sub-test"><q>
                                        Nam libero tempore, cum soluta
                                        nobis est eligendi optio cumque nihil impedit.</q>
                                    </p>
                                    <div className="d-grid sub-author-con">
                                        <div className="testi-img-res">
                                            <img src="website/assets/images/testi2.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="testi_grid text-left">
                                            <h5>Petey Cruis</h5>
                                            <p>Caption Here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 testi-sections">
                                <div className="testimonials_grid">
                                    <p className="sub-test"><q>
                                        Nam
                                        libero
                                        tempore, cum soluta
                                        nobis est eligendi optio cumque nihil impedit.</q>
                                    </p>
                                    <div className="d-grid sub-author-con">
                                        <div className="testi-img-res">
                                            <img src="website/assets/images/testi1.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="testi_grid text-left">
                                            <h5>Molive Joe</h5>
                                            <p>Caption Here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 testi-sections">
                                <div className="testimonials_grid">
                                    <p className="sub-test"><q>
                                        Nam
                                        libero
                                        tempore, cum soluta
                                        nobis est eligendi optio cumque nihil impedit.</q>
                                    </p>
                                    <div className="d-grid sub-author-con">
                                        <div className="testi-img-res">
                                            <img src="website/assets/images/testi3.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="testi_grid text-left">
                                            <h5>Paige Turner</h5>
                                            <p>Caption Here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* //clients section */}
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
            <Footer/>
        </div>

    )
}

export default Home
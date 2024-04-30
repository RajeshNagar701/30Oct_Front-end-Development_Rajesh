import React from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'

function Contact() {
    return (
        <div>
            <Header2 title="Contact us"/>
            <div className="contact-form py-5">
                <div className="container py-lg-5 py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-sm-5 mb-4">
                                <h3 className="title-style mb-2">Contact Us</h3>
                                <p className="lead">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto" style={{ maxWidth: 1100 }}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-address p-4">
                                    <div className="contact-icon d-flex align-items-center">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <div className="ml-3">
                                            <h5 className="contact-text">Visit Us:</h5>
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
                        <div className="contact-form pt-5 mt-2">
                            <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="cont-form p-sm-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="w3lName" id="w3lName" placeholder="Your Name" className="contact-input" />
                                        <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Phone Number" className="contact-input" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email id" className="contact-input" required />
                                        <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Subject" className="contact-input" />
                                    </div>
                                </div>
                                <textarea className="contact-textarea" name="w3lMessage" id="w3lMessage" placeholder="Type your message here" required defaultValue={""} />
                                <div className="text-right">
                                    <button className="btn btn-style">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin" frameBorder={0} style={{ border: 0 }} allowFullScreen />
            </div>
            {/* //contact page */}
            <Footer/>
        </div>

    )
}

export default Contact
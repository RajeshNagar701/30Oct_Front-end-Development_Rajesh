import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

function Contact() {
    return (
        <>
            <Header title="Contact Page" />
            <div className='container mt-5 mb-5'>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Contact</h2>
                        <h5>Title description, Dec 7, 2020</h5>
                        <form action="/action_page.php">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
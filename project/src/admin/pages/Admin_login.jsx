import React from 'react'
import AFooter from '../component/AFooter'
import { Link } from 'react-router-dom'

function Admin_login() {
    return (
        <div>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke bg-white ">
                        <h1>
                            <Link className="navbar-brand" to="/admin-login">Beauty Skin</Link>
                        </h1>
                    </nav>

                </div>
            </header>

            <div className="contact-form py-5 mb-5">
                <div className="container py-lg-5 py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-sm-5 mb-4">
                                <h3 className="title-style mb-5">Admin Login</h3>
                                <p className="lead">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto" style={{ maxWidth: 1100 }}>
                        <div className="row mt-5 mb-5">

                            <div className="offset-lg-3 col-lg-6 offset-md-3 col-md-6 ">
                                <form action="" method='post'>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Password:</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                    </div>
                                   
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <AFooter />
        </div>
    )
}

export default Admin_login
import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, Link } from 'react-router-dom'

function AHeader({ title }) {

    return (
        <div>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </Helmet>
            {/*header*/}
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke bg-white ">
                        <h1>
                            <Link className="navbar-brand" to="/dashboard">Beauty Skin</Link>
                        </h1>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Categories</a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/add_categories">Add</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/manage_categories">Manage</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Services</a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/add_services">Add</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/manage_services">Manage</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Blog</a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/add_blog">Add</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/manage_blog">Manage</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/manage_user">Customer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/manage_contact">Contacts</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"><i className='fa fa-user'></i>Hi .. </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>

                    </nav>

                </div>
            </header>

        </div>

    )
}

export default AHeader
import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'

function Pnf() {
    return (
        <>
            <Header title="Page Not Found" />
            <div className='container mt-5 mb-5'>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Page Not Found</h2>
                        <h5>404</h5>

                        <Link to="/" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pnf
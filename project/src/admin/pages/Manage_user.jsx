import React from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'

function Manage_user() {
    return (
        <div>
            <AHeader title="Contact us" />
            <div className="contact-form py-5 mb-5">
                <div className="container py-lg-5 py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-sm-5 mb-4">
                                <h3 className="title-style mb-5">Manage User</h3>
                                <p className="lead">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto" style={{ maxWidth: 1100 }}>
                        <div className="row mt-5 mb-5">
                            <div className="col-lg-12 col-md-12">

                                <table className="table">
                                    <thead className="table-danger">
                                        <tr>
                                            <th>ID</th>
                                            <th>Categories Name</th>
                                            <th>Image</th>
                                            <th align="center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Skin</td>
                                            <td><img src="" width="50px" alt="" /></td>
                                            <td>
                                                <button className='btn btn-danger'>Delete</button>
                                                <button className='btn btn-primary'>Edit</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <AFooter />
        </div>
    )
}

export default Manage_user
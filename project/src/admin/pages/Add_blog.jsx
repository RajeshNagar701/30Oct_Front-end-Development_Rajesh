import React from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'

function Add_blog() {
    return (
        <div>
            <AHeader title="Contact us" />
            <div className="contact-form py-5 mb-5">
                <div className="container py-lg-5 py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-heading text-center mb-sm-5 mb-4">
                                <h3 className="title-style mb-5">Add Blog</h3>
                                <p className="lead">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                    eaque ipsa quae ab illo inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto" style={{ maxWidth: 1100 }}>
                        <div className="row mt-5 mb-5">
                            <div className="offset-lg-3 col-lg-6 offset-md-3 col-md-6">

                                <form action="" method='post'>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Blog Title:</label>
                                        <input type="text" className="form-control" id="email" placeholder="Enter Blog Title" name="blog_title" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Blog Image:</label>
                                        <input type="url" className="form-control" id="email" placeholder="Enter Categories Image URL" name="blog_img" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Blog Image:</label>
                                        <textarea className="form-control" id="email" placeholder="Enter Blog Description" name="blog_desc" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
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

export default Add_blog
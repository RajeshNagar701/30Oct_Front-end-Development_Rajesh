import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Header2 from '../component/Header2'
import axios from 'axios';

function Blog() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog`);
        console.log(res.data);
        setData(res.data)
    }

    return (
        <>
            <Header2 title="View Blog" />
            <div>

                {/* Open Hours Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">


                        {
                            data && data.map((value, index, arr) => {
                                return (
                                    <div className="row mb-5">
                                        <div className="col-lg-4" style={{ minHeight: "200px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute w-100 h-100" src={value.blog_img} style={{ objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 pt-5 pb-lg-5">
                                            <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                                                
                                                <h1 className="mb-4">{value.title}</h1>
                                                <p>{value.description}</p>
                                                <a href className="btn btn-primary mt-2">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }




                    </div>
                </div>
                {/* Open Hours End */}
            </div>


            <Footer />
        </>
    )
}

export default Blog
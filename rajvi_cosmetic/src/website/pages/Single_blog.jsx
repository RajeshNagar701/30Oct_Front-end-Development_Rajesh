import React, { useEffect, useState } from 'react'
import Header2 from '../component/Header2'
import Footer from '../component/Footer'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Single_blog() {


    const [data, setData] = useState({});

    useEffect(() => {
        fetch();
    });
    const {id}=useParams();
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        console.log(res.data);
        setData(res.data)
    }


    return (
        <div>
            <Header2 title="Single Blog"/>
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-5 pb-lg-0">
                            <img className="img-fluid w-100" src={data.blog_img} alt />
                        </div>
                        <div className="col-lg-6">
                            <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">Single Blog</h6>
                            <h1 className="mb-4">{data.title}</h1>
                            <p className="pl-4 border-left border-primary">{data.description    }</p>
                          
                        </div>
                    </div>
                </div>
            </div>
         
          
            <Footer/>
        </div>

    )
}

export default Single_blog
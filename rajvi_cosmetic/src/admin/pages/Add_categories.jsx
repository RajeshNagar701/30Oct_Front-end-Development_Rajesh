import React, { useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios'

function Add_categories() {
    const [formvalue,setFormvalue]=useState({
        cate_name:"",
        cate_img:"",
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const submitHandel=async(e)=>{
       e.preventDefault();
       const res= await axios.post(`http://localhost:3000/categories`,formvalue);
       setFormvalue({...formvalue,cate_name:"",cate_img:""}); 
    }
    return (
        <div>
            <AHeader title="Add Categories"/>
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Categories</h6>
                                <h1 className="mb-4">Add Categories</h1>
                                <div id="success" />
                                <form method='post' name="sentMessage" id="contactForm" onSubmit={submitHandel}>
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" value={formvalue.cate_name} onChange={changeHandel} name="cate_name" className="form-control border-0 p-4" id="name" placeholder="Categories Name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" value={formvalue.cate_img} onChange={changeHandel} name="cate_img" className="form-control border-0 p-4" id="cate_img" placeholder="Categories Image"/>
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                   
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <AFooter />
        </div>
    )
}

export default Add_categories
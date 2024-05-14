import React, { useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios'

function Add_blog() {

    const [formvalue,setFormvalue]=useState({
        title:"",
        description:"",
        blog_img:""
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const submitHandel=async(e)=>{
       e.preventDefault();
       const res= await axios.post(`http://localhost:3000/blog`,formvalue);
       setFormvalue({...formvalue,title:"",description:"",blog_img:""}); 
    }

    return (
        <div>
            <AHeader title="Add Blog"/>
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2"><td>Blog</td></h6>
                                <h1 className="mb-4">Add Blog</h1>
                                <div id="success" />
                                <form method="post" name="sentMessage" onSubmit={submitHandel}>
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" value={formvalue.title} onChange={changeHandel}  name="title" placeholder="Blog Title" required="required" data-validation-required-message="Please enter your name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4" value={formvalue.blog_img} onChange={changeHandel} name="blog_img" placeholder="Blog Image" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                   
                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" rows={3} value={formvalue.description} onChange={changeHandel} name="description" placeholder="Blog Description" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                                        <p className="help-block text-danger" />
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

export default Add_blog
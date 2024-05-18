import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';


function Add_services() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data)
    }


    const [formvalue, setFormvalue] = useState({
        cate_id: "",
        service_name: "",
        desc: "",
        price: "",
        ser_img: ""
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {

        var result = true;
        if (formvalue.cate_id == "") {
            toast.error('Categories Field is required !');
            result = false;
            return false;
        }
        if (formvalue.service_name == "") {
            toast.error('Sevice Name Field is required !');
            result = false;
            return false;
        }
        if (formvalue.desc == "") {
            toast.error('Description Field is required !');
            result = false;
            return false;
        }
        if (formvalue.price == "") {
            toast.error('Price Field is required !');
            result = false;
            return false;
        }
        if (formvalue.ser_img == "") {
            toast.error('Service Image Field is required !');
            result = false;
            return false;
        }
        return result;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/services`, formvalue);
            setFormvalue({ ...formvalue, cate_id: "", service_name: "", desc: "", price: "", ser_img: "" });
            toast.success('Services Add Success');
            return false;
        }
    }

    return (
        <div>
            <AHeader title="Add Services" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Add Services</h1>
                                <div id="success" />
                                <form method='post' onSubmit={submitHandel} name="sentMessage" >
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <select className="form-control border-0" value={formvalue.cate_id} onChange={changeHandel} name="cate_id" placeholder="Services Name" >
                                                <option value="" selected>-------- Select Categories ---------</option>
                                                {
                                                    data && data.map((value, index, arr) => {
                                                        return (
                                                            <option value={value.id}>{value.cate_name}</option>
                                                        )
                                                    })
                                                }


                                            </select>
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" value={formvalue.service_name} onChange={changeHandel} name="service_name" placeholder="Services Name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4" value={formvalue.ser_img} onChange={changeHandel} name="ser_img" placeholder="Service Image" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" value={formvalue.price} onChange={changeHandel} name="price" placeholder="Main Price" />
                                            <p className="help-block text-danger" />
                                        </div>

                                    </div>

                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" value={formvalue.desc} onChange={changeHandel} name="desc" rows={3} id="message" placeholder="Service Description" defaultValue={""} />
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

export default Add_services
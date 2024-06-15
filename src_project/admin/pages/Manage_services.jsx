import React, { useEffect, useState } from 'react'
import AHeader from '../component/AHeader'
import AFooter from '../component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Manage_services() {

    const redirect=useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services`);
        console.log(res.data);
        setData(res.data)
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/services/${id}`);
        toast.success('Service Delete Success');
        return false;
    }

    return (
        <div>
            <AHeader title="Manage Services" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Manage Services</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Categories ID</th>
                                            <th>Service Image</th>
                                            <th>Service Name</th>
                                            <th>Main Price</th>
                                            <th>Discounted Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.cate_id}</td>
                                                        <td>{value.service_name}</td>
                                                        <td>{value.desc}</td>
                                                        <td>{value.price}</td>
                                                        <td><img src={value.ser_img} alt="" width="50px" /></td>
                                                        <td>
                                                            <button className='btn btn-info mr-2' onClick={()=>redirect('/edit_services/'+value.id)}>Edit</button>
                                                            <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <AFooter />
        </div>
    )
}

export default Manage_services
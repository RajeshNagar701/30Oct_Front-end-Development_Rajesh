/*
Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: NEW HOOKS useEffect()

Mounting
Updating
Unmounting

    useEffect(()=>{
        console.log('Image componentDidMount Birth/update');  // didmount / didupdate
         return(()=>console.log('Image componentWillUnmount Death')); // willunmount
    },[data.number]);

*/
import React, { useState,useEffect } from 'react'
import Func_imglife from './Func_imglife'

function Func_Life() {

    const [data,setData]=useState({
        isImage:true,
        number:0
    })

    useEffect(()=>{
        console.log('Image componentDidMount Birth/update');
    },[data.number]);


    return (
        <div>
            <h1>Hi i am Class Component Life Cycle</h1>

            <button onClick={() => setData({ ...data,isImage: false })}>Hide</button>
            <button onClick={() => setData({ ...data,isImage: true })}>Show</button>
            {data.isImage ? <Func_imglife /> : null}

            <hr />

            <button onClick={() => setData({ ...data,number: data.number+1 })}>+</button>
            <h1>{data.number}</h1>
            <button onClick={() => setData({ ...data,number: data.number-1 })}>-</button>


        </div>
    )
}

export default Func_Life


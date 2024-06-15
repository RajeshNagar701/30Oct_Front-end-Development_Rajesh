import React,{useState} from 'react'
import B from './B'

function A() {
const [name,setName]=useState("Raj nagar");

  return (
    <div>
        <button className='btn btn-primary' onClick={()=>setName("Akash nagar")}>Change from A</button>
        <h1>Hi i am A Component : {name}</h1>
        <B name={name} setName={setName}/>
    </div>
  )
}

export default A
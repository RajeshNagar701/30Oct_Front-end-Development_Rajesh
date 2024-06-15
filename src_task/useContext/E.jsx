import React, { useContext } from 'react'
import { DataContext } from './A'

function E() {

  const {name, setName}=useContext(DataContext);
  return (
    <div>
        <button onClick={()=>setName("Pinal Nagar")} className='btn btn-primary'>Change E</button>
        <h1>Hi i am E Component : {name}</h1>
    </div>
  )
}

export default E
/*

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

useState() hooks in function compo


  const [number,setNumber]=useState(1) ;
  
  const [formvalue,setFormvalue]=useState({
    name:"Rajesh nagar",
    age: "33",
    isImage: true
  });

  {name}

  ()=>setFormvalue({...formvalue,name:"Akash nagar"})
*/


import React,{ useState }  from 'react'
import Image from './Image';

function Func_state() {

  const [number,setNumber]=useState(1) ;
  
  const [formvalue,setFormvalue]=useState({
    name:"Rajesh nagar",
    age: "33",
    isImage: true
  });

  return (
    <div className='container mt-5'>
        <button onClick={()=>setNumber(number+1)}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number-1)}>-</button>
        <hr />
        <button onClick={()=>setFormvalue({...formvalue,name:"Raj Patel",age:"34"})}>Change</button>
        <h1>Hi my name is {formvalue.name} and my age is {formvalue.age}</h1>
        <hr />

        <button onClick={()=>setFormvalue({...formvalue,isImage:false})}>Hide</button>
        <button onClick={()=>setFormvalue({...formvalue,isImage:true})}>Show</button>
        <button onClick={()=>setFormvalue({...formvalue,isImage:!formvalue.isImage})}>Hide/Show</button>
        {
            formvalue.isImage ?  <Image/> : null
        } 
        

    </div>
  )
}

export default Func_state

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Img from './Img'
import { Change, Hide, Minus, Plus, Show, Toggle } from '../DataSlice';

function Mytask() {

  // by useSelector you can access any slice state from store  
  const {name,number,isImage} =useSelector((state)=>state.data); 

 const dispatch=useDispatch(); 

  return (
    <div>
        <button onClick={()=>dispatch(Change())}>Change</button>
        <h1>{name}</h1>
        <hr />
        <button onClick={()=>dispatch(Plus())}>+</button>
        <h1>{number}</h1>
        <button onClick={()=>dispatch(Minus())}>+</button>
        <hr />
        <button onClick={()=>dispatch(Hide())}>Hide</button>
        <button onClick={()=>dispatch(Show())}>Show</button>
        <button onClick={()=>dispatch(Toggle())}>Toogle</button>
        {
            isImage?<Img/>:null
        }

    </div>
  )
}

export default Mytask
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment , decrement , changebyvalue} from "./counterslice"

const Component1 = () => {
  const[change , setChange]=useState('')
    const mystate = useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    const handler=(e)=>{
      if(e.target.value==="1"){
        dispatch(changebyvalue(change))
      }
      if(e.target.value==="2"){
        dispatch(changebyvalue(Number(-change)))
      }
     
      setChange('')
    }
  return (
    <div className="main_div_component_class">
      <div className="inner_div">
        <button onClick={()=>dispatch(increment())}>+</button>
        <button>{mystate}</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <div><input type="number" value={change} onChange={(e)=>setChange(e.target.value)}/>
      {change?<select  onChange={handler}><option value="3">Select</option><option value="1">Increment by {change}</option><option value="2">Decrement by {change}</option></select>:""}
     </div>

    </div>
  )
}

export default Component1
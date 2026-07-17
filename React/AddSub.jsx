import React, { useState } from "react";
import B from './B'

export default function AddSum(){
    const [num,setNum]=useState(1)

    const name ="username"

    function add(){
        setNum(num+1)
    }
    function min(){
        setNum(num-1)
    }
    function mul(){
        setNum(num*num)
    }
    function div(){
        setNum()
    }
    return(
        <>
        <h1>{num}</h1>
        <button onClick={add}>+</button>
        <button onClick={min}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>%</button>

        <B send ={name} />
        </>
    )

}
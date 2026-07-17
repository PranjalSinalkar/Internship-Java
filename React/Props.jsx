import React, { useState } from "react";

import B from './B';

export default function Props(){

    // const [num,setNum]=useState(1)

   const name ="username"
    
    return(
        <>
        {/* <h1>{num}</h1> */}
        <B send ={name} />
        </>
    )

}
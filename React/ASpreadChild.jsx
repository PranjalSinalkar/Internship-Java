import React from "react";

export default function ASpreadChild({fun}){
function Demo(){
    fun(1,2,3,4,5)
}

    return(
        <>
        <button onClick={Demo}>Print</button>
        </>
    )
}

 


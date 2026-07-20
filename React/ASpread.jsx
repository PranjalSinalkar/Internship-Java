import React, { useState } from "react";
import ASpreadChild from './ASpreadChild'
export default function ASpread(){
    function Array(...Numbers){
        for(let i of Numbers){
            console.log(Numbers)
        }
    }
    return(
        <>
        <ASpreadChild fun ={Array} />
        </>
    )
}

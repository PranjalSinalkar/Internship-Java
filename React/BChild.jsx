import React from "react";

export default function BChild({data}){
    const {name,address,Age,Mobile}=data
    return(
        <>
        <h3>This is example of Rest Operator</h3>
        <h2>name:{name}</h2>
        <h2>address:{address}</h2>
        <h2>Age:{Age}</h2>
        <h2>Mobile:{Mobile}</h2>
        </>
    )
}
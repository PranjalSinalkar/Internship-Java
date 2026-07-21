import React, { useState } from "react";
export default function ContactFormChild(){
    return(
        <>
            <p>{store.username}</p>
            <p>{store.email}</p>
            <p>{store.mobile}</p>
            <p>{store.password}</p>
        </>
    )
}
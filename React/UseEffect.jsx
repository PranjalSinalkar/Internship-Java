import React, { useState ,useEffect } from "react";

    export default function UseEffect(){
    const [count,setCount]=useState(0);

    const [userData,setUserData]=useState([])
    useEffect(()=>
    {
        // console.log("Useeffect Hook Called");
        async function fetdataa() {
            const dataa=await fetch("https://jsonplaceholder.typicode.com/users");
            const res= await dataa.json();

            setUserData(res)
        }
        fetdataa()
    },[]);
    return(
        <>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>
                Increment
            </button>
            {
                userData.map((users)=>(
                    <>
                    
                    <p>{users.name}</p>
                    <p>{users.email}</p>
                    </>
                ))
            }
        </>
    );
}

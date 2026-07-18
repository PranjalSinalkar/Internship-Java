import React, { useState } from "react";

export default function Form()
{
    const [userData ,setUserData]=useState(
        {
            username:"",
            email:"",
        });

    const [store,setStore]=useState();

    const handleChange=(e)=> {

        const {name,value}=e.target;

        setUserData((prev)=>({
            ...prev,

            [name]:value,
        }));
    };

    const handleForm=(e)=>{
        e.preventDefault();

        setStore(userData);
         setUserData({
            username:"",
            email:""
         })
    };

    return(
        <>
            <form onSubmit={handleForm}>
                <input 
                type="username"
                name="username"
                value={userData.username}

                onChange={handleChange}

                placeholder="Username"

        
                />

                <br />
                <br />
                <input
                type="email"
                name="email"
                value={userData.email}

                onChange={handleChange}

                placeholder="Email"
                />
                <br />
                <br />

                <button type="submit">Submit</button>
            </form>


            {
                store &&(
                    <div>
                        <h3>{store.username}</h3>
                        <p>{store.email}</p>
                    </div>
                )
            }
        </>
    )
}
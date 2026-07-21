import React, { useState } from "react";
import ContactFormChild from "./ContactFormChild";
export default function ContactForm(){
    const [userData ,setUserData]=useState(
            {
                username:"",
                email:"",
                mobile:"",
                password:""
            });
        const [store,setStore]=useState(null);
            
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
        email:"",
        mobile:"",
        password:""
    });
};
    return(
        <>
        <h2>Contact Form</h2>
        <form onSubmit={handleForm} >


    <label>Username:</label>   
    <input 
        type="text"
        name="username"
        placeholder="Enter Username"
        value={userData.username}
        onChange={handleChange} />
        <br></br>

    <label>Email:</label>   
    <input 
        type="email"
        name="email"
        placeholder="Enter Email"
        value={userData.email}
        onChange={handleChange} /><br></br>


    <label>Mobile No:</label>   
    <input 
        type="number"
        name="mobile"
        placeholder="Enter Moile No"
        value={userData.mobile}
        onChange={handleChange} /><br></br>

        <label>Password:</label>   
    <input 
        type="password"
        name="password"
        placeholder="Enter Password"
        value={userData.password}
        onChange={handleChange} /><br></br>

        <button type="submit">Submit</button>
        </form>
        </>
    )

    // store &&(
    //     <div>
    //         <p>{store.username}</p>
    //         <p>{store.email}</p>
    //         <p>{store.mobile}</p>
    //         <p>{store.password}</p>
    //     </div>
    // )


}
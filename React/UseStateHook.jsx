import React,{useState} from "react";
// import "./assets/USeStateHook.css";

export default function Registration(){
    const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
});
    const [submiteddata,setSubmiteddata]=useState(null)
    const handleChange=(event)=>{
        const { name,value }=event.target;
        setData({
            ...data ,
            [name]:value,

    });
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        setSubmiteddata(data);
    };
    return(
        <>
        <h2>Registration Form:</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="enter name"
            value={data.name}
            onChange={handleChange}
            />
            <br></br><br></br>
            <input
            type="email"
            name="email"
            placeholder="enter email"
            value={data.email}
            onChange={handleChange}
            /><br></br><br></br>
            <input
            type="password"
            name="password"
            placeholder="enter password"
            value={data.password}
            onChange={handleChange}
            /><br></br><br></br>
            <button type="submit">Register</button>
            
        </form>
        {submiteddata&&
        (
            <div>
                <h3>Submitted Data:</h3>
                <h4>Name:{submiteddata.name}</h4>
                <h4>Email:{submiteddata.email}</h4>
                <h4>Password:{submiteddata.password}</h4>
            </div>
        )}
        </>
    )
    
}

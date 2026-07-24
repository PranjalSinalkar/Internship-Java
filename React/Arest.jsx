
import React, { useContext } from "react";
// import BChild from "./BChild";
import { UserContext } from "./ThemeChanger";
export default function Arest() {
    const { name,color,changecolor} = useContext(UserContext);

    // const Obj = {
    //     name: "Pranjal",
    //     address: "Pune",
    //     Age: "18",
    //     Mobile: "7841055730"
    // };

    return (
        <>
            <h1 style={{color:color}}>{name}</h1>
            <button onClick={()=>changecolor("red")}>red</button>
            <button onClick={()=>changecolor("green")}>green</button>
            <button onClick={()=>changecolor("blue")}>blue</button>
            {/* <BChild data={Obj} /> */}
        </>
    );
}

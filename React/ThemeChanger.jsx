import React ,{useContext, useState} from "react";
import { createContext } from "react";
import Arest from "./Arest"

export const UserContext=createContext();

export default function Changer(){
    const [color,setColor]=useState()

    const name="Pranjal"

    function changecolor(newColor){
        setColor(newColor)
    }
    return(
            <UserContext.Provider value={{name,changecolor,color}}>
            //and we are passing data to whole file which are under it
            <Arest />
           </UserContext.Provider>
        
    )
}
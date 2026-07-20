import React from "react";

import BChild from './BChild'

export default function ARest(){
    const Obj={
        name:"Pranjal",address:"Pune",Age:"18",Mobile:"7841055730"
    }
    return(
        <>
        <BChild data={Obj} />
        </>
    )
}


import React, { useContext } from "react";
import BChild from "./BChild";
import { UserContext } from "./UseContext";

export default function ARest() {
    const { name } = useContext(UserContext);

    const Obj = {
        name: "Pranjal",
        address: "Pune",
        Age: "18",
        Mobile: "7841055730"
    };

    return (
        <>
            <h2>{name}</h2>
            <BChild data={Obj} />
        </>
    );
}

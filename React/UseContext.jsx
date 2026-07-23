import { createContext } from "react";
import Arest from "./Arest";

export const UserContext = createContext();

export default function UseContext() {
    const name = "user1";

    return (
        <UserContext.Provider value={name}>
            <Arest />
        </UserContext.Provider>
    );
}
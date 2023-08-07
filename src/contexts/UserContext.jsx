/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const UserContext = createContext()

export default UserContext



export function UserContextProvider({children}){

    const [userLogin, setUserLogin] = useState({});

    return(
        <UserContext.Provider value={{userLogin, setUserLogin}}>
            {children}
        </UserContext.Provider>
    )
}
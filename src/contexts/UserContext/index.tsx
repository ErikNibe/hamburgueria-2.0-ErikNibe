import { createContext } from "react";
import { iUserProviderProps } from "./types";

export const UserContext = createContext({});

export const UserProvider = ({ children }: iUserProviderProps) => {

    return (
        <UserContext.Provider value={{}}>
            { children }
        </UserContext.Provider>
    )
}
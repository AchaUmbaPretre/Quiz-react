import { createContext, useState } from "react";

export const EarnedContext = createContext();

export const ContextProvider  = ({children}) =>{
    const [earned, setEarned] = useState(0);

    return <EarnedContext.Provider value={{ earned,setEarned }}>
            {children}
           </EarnedContext.Provider>
}


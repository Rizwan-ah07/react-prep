import { createContext, useState, type ReactNode } from "react";

interface TasbeehContextType{
    total: number;
    addToTotal: (count: number) => void;
}

export const TasbeehContext = createContext<TasbeehContextType>(
    {
        total: 0,
        addToTotal: () => {}
    }
)

const TasbeehProvider = ({children} : {children: ReactNode}) => {
    const[ total, setTotal] = useState<number>(0);


const addToTotal = (count: number) => {
    setTotal((prev) => prev + count)
}

    return(
        <TasbeehContext.Provider value={{total, addToTotal}}>
            {children}
        </TasbeehContext.Provider>
    )
}

export default TasbeehProvider
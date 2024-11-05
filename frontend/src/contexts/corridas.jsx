import { createContext, useState } from 'react';

export const CorridasContext = createContext();

export const CorridasProvider = ({ children }) => {
    const [Corridas, setCorridas] = useState(0);

    return (
        <CorridasContext.Provider value={{ Corridas, setCorridas }}>
            {children}
        </CorridasContext.Provider>
    );
};
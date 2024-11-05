import { createContext, useState } from 'react';

export const DistanciaContext = createContext();

export const DistanciaProvider = ({ children }) => {
    const [Distancia, setDistancia] = useState(0);

    return (
        <DistanciaContext.Provider value={{ Distancia, setDistancia }}>
            {children}
        </DistanciaContext.Provider>
    );
};
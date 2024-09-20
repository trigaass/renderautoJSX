import React, { createContext, useState } from 'react';

export const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
    const [combustivel, setCombustivel] = useState(0);
    const [gastosExtras, setGastosExtras] = useState(0);

    return (
        <GastosContext.Provider value={{ combustivel, setCombustivel, gastosExtras, setGastosExtras }}>
            {children}
        </GastosContext.Provider>
    );
};
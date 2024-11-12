import { createContext, useState } from 'react';

export const ReaisContext = createContext();

export const ReaisProvider = ({ children }) => {
    const [reais, setReais] = useState(0);

    return (
        <ReaisContext.Provider value={{ reais, setReais }}>
            {children}
        </ReaisContext.Provider>
    );
};
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [isMobileView, setIsMobileView] = useState(
        window.matchMedia('(max-width: 768px)').matches
    );

    useEffect(() => {
        window
            .matchMedia('(max-width: 768px)')
            .addEventListener('change', (e) => setIsMobileView(e.matches));
    }, []);

    return (
        <AppContext.Provider value={{ isMobileView }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

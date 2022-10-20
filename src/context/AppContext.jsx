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

    const [filters, setFilters] = useState({
        Color: [],
        Category: [],
        Feature: [],
        Storage: [],
        'Bag size': [],
        Use: [],
        Material: [],
    });

    const resetFilters = () => {
        setFilters({
            Color: [],
            Category: [],
            Feature: [],
            Storage: [],
            'Bag size': [],
            Use: [],
            Material: [],
        });
    };

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    return (
        <AppContext.Provider
            value={{ isMobileView, filters, setFilters, resetFilters }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
